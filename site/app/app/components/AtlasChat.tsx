"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { getSectionSuggestions } from "./atlasChatSuggestions";
import {
  createId,
  createSession,
  deriveSessionTitle,
  formatSessionTime,
  getTimestamp,
  loadChatState,
  saveChatState,
  sessionPreview,
  welcomeMessage,
  type ChatMessage,
  type ChatSession,
} from "./atlasChatStorage";

type AtlasChatProps = {
  open: boolean;
  onClose: () => void;
  workspace: string;
  tabId: string;
};

export default function AtlasChat({ open, onClose, workspace, tabId }: AtlasChatProps) {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const activeSession = sessions.find((session) => session.id === activeSessionId) ?? null;
  const messages = useMemo(
    () => activeSession?.messages ?? [welcomeMessage(workspace, tabId)],
    [activeSession, tabId, workspace],
  );
  const sectionSuggestions = getSectionSuggestions(tabId);
  const suggestedPrompts = sectionSuggestions.prompts;

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const stored = loadChatState();
      if (stored.sessions.length > 0) {
        setSessions(stored.sessions);
        setActiveSessionId(stored.activeId ?? stored.sessions[0]?.id ?? null);
      } else {
        const initial = createSession(workspace, tabId);
        setSessions([initial]);
        setActiveSessionId(initial.id);
      }
      setHydrated(true);
    });

    return () => window.cancelAnimationFrame(frame);
    // Hydrate once from localStorage on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!hydrated || !activeSessionId) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setSessions((current) =>
        current.map((session) => {
          if (session.id !== activeSessionId) {
            return session;
          }

          const onlyWelcome =
            session.messages.length === 1 && session.messages[0].id === "welcome" && session.messages[0].role === "assistant";
          if (!onlyWelcome) {
            return session;
          }

          const nextWelcome = welcomeMessage(workspace, tabId);
          if (
            session.workspace === workspace &&
            session.tabId === tabId &&
            session.messages[0].content === nextWelcome.content
          ) {
            return session;
          }

          return {
            ...session,
            workspace,
            tabId,
            messages: [nextWelcome],
            updatedAt: getTimestamp(),
          };
        }),
      );
    });

    return () => window.cancelAnimationFrame(frame);
  }, [tabId, workspace, activeSessionId, hydrated]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }
    saveChatState(sessions, activeSessionId);
  }, [sessions, activeSessionId, hydrated]);

  useEffect(() => {
    if (!open || showHistory) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
      messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: "smooth" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [open, messages, isLoading, showHistory, activeSessionId]);

  const updateActiveSession = (updater: (session: ChatSession) => ChatSession) => {
    if (!activeSessionId) {
      return;
    }

    setSessions((current) =>
      current.map((session) => (session.id === activeSessionId ? updater(session) : session)),
    );
  };

  const startNewChat = () => {
    const session = createSession(workspace, tabId);
    setSessions((current) => [session, ...current]);
    setActiveSessionId(session.id);
    setShowHistory(false);
    setError(null);
    setInput("");
  };

  const openSession = (sessionId: string) => {
    setActiveSessionId(sessionId);
    setShowHistory(false);
    setError(null);
    setInput("");
  };

  const sendMessage = async (rawText: string) => {
    const text = rawText.trim();
    if (!text || isLoading || !activeSessionId || !activeSession) {
      return;
    }

    setError(null);
    setInput("");

    const conversation = messages.filter((message) => message.id !== "welcome");
    const userMessage: ChatMessage = { id: createId(), role: "user", content: text };
    const assistantMessage: ChatMessage = { id: createId(), role: "assistant", content: "" };
    const nextMessages = [...conversation, userMessage, assistantMessage];
    const now = getTimestamp();

    setSessions((current) =>
      current.map((session) =>
        session.id === activeSessionId
          ? {
              ...session,
              workspace,
              tabId,
              title: deriveSessionTitle([...conversation, userMessage]),
              messages: nextMessages,
              updatedAt: now,
            }
          : session,
      ),
    );
    setIsLoading(true);

    try {
      const response = await fetch("/api/atlas/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          context: { workspace, tabId },
          messages: [...conversation, userMessage].map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!response.ok) {
        let message = "Atlas could not respond right now.";
        try {
          const payload = (await response.json()) as { error?: string };
          if (payload.error) {
            message = payload.error;
          }
        } catch {
          // Ignore JSON parse errors for non-JSON responses.
        }
        throw new Error(message);
      }

      if (!response.body) {
        throw new Error("Atlas returned an empty response.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let streamed = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        streamed += decoder.decode(value, { stream: true });
        updateActiveSession((session) => ({
          ...session,
          messages: session.messages.map((message) =>
            message.id === assistantMessage.id ? { ...message, content: streamed } : message,
          ),
          updatedAt: getTimestamp(),
        }));
      }
    } catch (sendError) {
      const message = sendError instanceof Error ? sendError.message : "Something went wrong.";
      setError(message);
      updateActiveSession((session) => ({
        ...session,
        messages: session.messages.filter((item) => item.id !== assistantMessage.id),
        updatedAt: getTimestamp(),
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    void sendMessage(input);
  };

  const onComposerKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  };

  const sortedSessions = [...sessions].sort((a, b) => b.updatedAt - a.updatedAt);

  return (
    <aside className="atlas-agent-drawer" aria-hidden={!open}>
      <header className="atlas-chat-header">
        <div>
          <span>ATLAS AGENT</span>
          <h2>{showHistory ? "Chat history" : "Ask Atlas"}</h2>
        </div>
        <button type="button" aria-label="Close Atlas agent" onClick={onClose}>
          ×
        </button>
      </header>

      <div className="atlas-chat-toolbar">
        <button className="atlas-chat-toolbar-button" type="button" onClick={startNewChat}>
          + New chat
        </button>
        <button
          className={`atlas-chat-toolbar-button${showHistory ? " is-active" : ""}`}
          type="button"
          aria-pressed={showHistory}
          onClick={() => setShowHistory((current) => !current)}
        >
          {showHistory ? "Back to chat" : "History"}
        </button>
      </div>

      {!showHistory && (
        <div className="atlas-chat-context">
          <span className="atlas-live-dot" aria-hidden="true" />
          <strong>{activeSession?.workspace ?? workspace}</strong>
        </div>
      )}

      {showHistory ? (
        <div className="atlas-chat-history" aria-label="Chat history">
          {sortedSessions.length === 0 && <p className="atlas-chat-history-empty">No chats yet.</p>}
          {sortedSessions.map((session) => (
            <button
              key={session.id}
              type="button"
              className={`atlas-chat-history-item${session.id === activeSessionId ? " is-active" : ""}`}
              onClick={() => openSession(session.id)}
            >
              <div className="atlas-chat-history-item-top">
                <strong>{session.title}</strong>
                <time dateTime={new Date(session.updatedAt).toISOString()}>{formatSessionTime(session.updatedAt)}</time>
              </div>
              <span>{session.workspace}</span>
              <p>{sessionPreview(session)}</p>
            </button>
          ))}
        </div>
      ) : (
        <>
          <div className="atlas-chat-messages" ref={messagesRef} aria-live="polite">
            {messages.map((message) => (
              <article
                key={message.id}
                className={`atlas-chat-message atlas-chat-message-${message.role}${message.role === "assistant" && isLoading && !message.content ? " is-typing" : ""}`}
              >
                {message.role === "assistant" && (
                  <span className="atlas-chat-avatar" aria-hidden="true">
                    <span>B</span>
                  </span>
                )}
                <div className="atlas-chat-bubble">
                  {message.content ? (
                    <p>{message.content}</p>
                  ) : (
                    <p className="atlas-chat-typing">
                      <span />
                      <span />
                      <span />
                    </p>
                  )}
                </div>
              </article>
            ))}

            {!isLoading && messages.length <= 1 && (
              <div className="atlas-chat-suggestions" aria-label={`Suggested prompts for ${sectionSuggestions.label}`}>
                <p className="atlas-chat-suggestions-label">{sectionSuggestions.label} · try asking</p>
                {suggestedPrompts.map((prompt) => (
                  <button key={prompt} type="button" onClick={() => void sendMessage(prompt)} disabled={isLoading}>
                    {prompt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {error && <p className="atlas-chat-error">{error}</p>}

          <form className="atlas-chat-composer" onSubmit={onSubmit}>
            <label className="atlas-agent-input">
              <span aria-hidden="true">✦</span>
              <textarea
                ref={inputRef}
                aria-label="Ask Atlas"
                placeholder="Message Atlas…"
                rows={1}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={onComposerKeyDown}
                disabled={isLoading}
              />
              <button type="submit" aria-label="Send message" disabled={isLoading || !input.trim()}>
                ↑
              </button>
            </label>
          </form>
        </>
      )}
    </aside>
  );
}

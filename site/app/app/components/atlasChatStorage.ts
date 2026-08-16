import { getWelcomeContent } from "./atlasChatSuggestions";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export type ChatSession = {
  id: string;
  title: string;
  workspace: string;
  tabId: string;
  messages: ChatMessage[];
  createdAt: number;
  updatedAt: number;
};

const STORAGE_KEY = "buzo-atlas-chat-sessions";
const ACTIVE_KEY = "buzo-atlas-chat-active-id";
const MAX_SESSIONS = 40;

export function getTimestamp() {
  return Date.now();
}

export function createId() {
  return `${getTimestamp()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function welcomeMessage(workspace = "Command centre", tabId = "overview"): ChatMessage {
  return {
    id: "welcome",
    role: "assistant",
    content: getWelcomeContent(tabId, workspace),
  };
}

export function createSession(workspace: string, tabId: string): ChatSession {
  const now = getTimestamp();
  return {
    id: createId(),
    title: "New chat",
    workspace,
    tabId,
    messages: [welcomeMessage(workspace, tabId)],
    createdAt: now,
    updatedAt: now,
  };
}

export function deriveSessionTitle(messages: ChatMessage[]) {
  const firstUser = messages.find((message) => message.role === "user" && message.content.trim());
  if (!firstUser) {
    return "New chat";
  }

  const trimmed = firstUser.content.trim();
  return trimmed.length > 42 ? `${trimmed.slice(0, 42)}…` : trimmed;
}

export function loadChatState(): { sessions: ChatSession[]; activeId: string | null } {
  if (typeof window === "undefined") {
    return { sessions: [], activeId: null };
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const activeId = window.localStorage.getItem(ACTIVE_KEY);
    if (!raw) {
      return { sessions: [], activeId };
    }

    const sessions = JSON.parse(raw) as ChatSession[];
    if (!Array.isArray(sessions)) {
      return { sessions: [], activeId: null };
    }

    return { sessions, activeId };
  } catch {
    return { sessions: [], activeId: null };
  }
}

export function saveChatState(sessions: ChatSession[], activeId: string | null) {
  if (typeof window === "undefined") {
    return;
  }

  const trimmed = sessions
    .slice()
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, MAX_SESSIONS);

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
  if (activeId) {
    window.localStorage.setItem(ACTIVE_KEY, activeId);
  } else {
    window.localStorage.removeItem(ACTIVE_KEY);
  }
}

export function formatSessionTime(timestamp: number) {
  const date = new Date(timestamp);
  const now = new Date();
  const sameDay =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();

  if (sameDay) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  return date.toLocaleDateString([], { month: "short", day: "numeric" });
}

export function sessionPreview(session: ChatSession) {
  const last = [...session.messages].reverse().find((message) => message.content.trim() && message.id !== "welcome");
  return last?.content.trim() ?? "No messages yet";
}

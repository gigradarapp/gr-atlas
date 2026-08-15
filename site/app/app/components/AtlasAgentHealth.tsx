"use client";

import { useCallback, useEffect, useState } from "react";

type AgentHealthState = "checking" | "online" | "offline" | "unconfigured";

type HealthPayload = {
  status?: AgentHealthState;
};

const POLL_MS = 45_000;

export default function AtlasAgentHealth() {
  const [state, setState] = useState<AgentHealthState>("checking");

  const checkHealth = useCallback(async (background = false) => {
    if (!background) {
      setState("checking");
    }

    try {
      const response = await fetch("/api/atlas/health", { cache: "no-store" });
      const payload = (await response.json()) as HealthPayload;

      if (response.ok && payload.status === "online") {
        setState("online");
        return;
      }

      if (payload.status === "unconfigured") {
        setState("unconfigured");
        return;
      }

      setState("offline");
    } catch {
      setState("offline");
    }
  }, []);

  useEffect(() => {
    void checkHealth();
    const interval = window.setInterval(() => {
      void checkHealth(true);
    }, POLL_MS);

    return () => window.clearInterval(interval);
  }, [checkHealth]);

  const label =
    state === "online"
      ? "Agent online"
      : state === "checking"
        ? "Connecting"
        : state === "unconfigured"
          ? "Not configured"
          : "Agent offline";

  return (
    <div className={`atlas-agent-health atlas-agent-health-${state}`} role="status" aria-live="polite" aria-label={label}>
      <span className="atlas-agent-health-dot" aria-hidden="true" />
      <span className="atlas-agent-health-label">{label}</span>
    </div>
  );
}

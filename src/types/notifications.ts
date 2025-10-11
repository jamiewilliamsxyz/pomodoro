import type { SessionType } from "@/types";

export interface NotifyProps {
  currentSession: SessionType;
  nextDuration: number;
  nextBreak?: "long" | "short";
}

export interface UseNotificationReturn {
  requestPermission: () => Promise<void>;
  notify: (props: NotifyProps) => void;
}

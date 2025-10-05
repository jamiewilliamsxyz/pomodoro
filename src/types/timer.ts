// useTimer Hook
export type SessionType = "Focus" | "Short Break" | "Long Break";
export interface TimerState {
  isRunning: boolean;
  currentTime: number;
  sessionType: SessionType;
  roundsCompleted: number;
}

export interface TimerActions {
  startStop: () => void;
  // skipSession: () => void;
  // restartSession: () => void;
  // handleSessionEnd: () => void;
}

export type UseTimerReturn = TimerState & TimerActions;

export type TimerRef = NodeJS.Timeout | null;

// Format Time Function
export interface FormatTimeReturn {
  minutes: number;
  seconds: number;
}

// Timer Components Props
export type TimerProps = TimerState & TimerActions;

// useTimer Hook
export type SessionType = "Focus" | "Short Break" | "Long Break";
export interface TimerState {
  isRunning: boolean;
  currentTime: number;
  sessionType: SessionType;
  roundNumber: number;
  canRestartSession: boolean;
}

export interface TimerActions {
  startStop: () => void;
  restartSession: () => void;
  skipSession: () => void;
}

export type UseTimerReturn = TimerState & TimerActions;

export type TimerRef = number | null;

// Format Time Function
export interface FormatTimeReturn {
  minutes: number;
  seconds: number;
}

// Timer Components Props
export type TimerProps = TimerState & TimerActions;

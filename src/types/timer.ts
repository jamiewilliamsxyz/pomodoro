// useTimer Hook Types
export type SessionType = "Focus" | "Short Break" | "Long Break";

export interface TimerState {
  isRunning: boolean;
  currentTime: number;
  totalTime: number;
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

// Format Time Function Type
export interface FormatTimeReturn {
  minutes: number;
  seconds: number;
}

// Timer Components Props Types
export type TimerProps = TimerState & TimerActions;

export interface ProgressCircleProps
  extends Pick<TimerState, "currentTime" | "totalTime"> {
  diameter: number;
  radius: number;
  stroke: number;
}

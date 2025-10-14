// Types for modes: context & focus/PiP mode

export interface ModesContextType {
  isPiPMode: boolean;
  isFocusMode: boolean;
  toggleIsPiPMode: () => void;
  toggleIsFocusMode: () => void;
}

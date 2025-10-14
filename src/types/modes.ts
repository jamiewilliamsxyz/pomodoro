// Types for modes: context & focus/PiP mode

export interface ModesContextType {
  isPiPSupported: boolean;
  isPiPMode: boolean;
  isFocusMode: boolean;
  toggleIsPiPMode: () => void;
  toggleIsFocusMode: () => void;
}

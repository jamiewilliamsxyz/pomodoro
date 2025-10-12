// Settings Component Types
export type ActiveSectionState =
  | "timer"
  | "behaviour"
  | "notifications"
  | "appearance";

export type SettingsOptionType =
  | "slider"
  | "toggle"
  | "textButton"
  | "segmentedControl";

export interface OptionProps {
  title: string;
  id: string;
  type: SettingsOptionType;
  value?: number | boolean | string;
  min?: number;
  max?: number;
}

// SettingsContext/Reducer Types
export type SettingsAction =
  | { type: "UPDATE_TIMER"; payload: Partial<SettingsState["timer"]> }
  | { type: "RESET_TIMER_SETTINGS" }
  | { type: "UPDATE_BEHAVIOUR"; payload: Partial<SettingsState["behaviour"]> }
  | {
      type: "UPDATE_NOTIFICATIONS";
      payload: Partial<SettingsState["notifications"]>;
    }
  | {
      type: "UPDATE_APPEARANCE";
      payload: Partial<SettingsState["appearance"]>;
    };

export type SettingsContextType = {
  activeSection: ActiveSectionState;
  setActiveSection: React.Dispatch<React.SetStateAction<ActiveSectionState>>;
  settings: SettingsState;
  dispatch: React.Dispatch<SettingsAction>;
};

export type Theme = "light" | "dark" | "system";

export interface TimerSettings {
  focus: number;
  shortBreak: number;
  longBreak: number;
  rounds: number;
}

export interface BehaviourSettings {
  autoStart: boolean;
  displayQuotes: boolean;
}

export interface NotificationSettings {
  popupNotifications: boolean;
  notificationVolume: number;
}

export interface AppearanceSettings {
  theme: Theme;
}

export type SettingsState = {
  timer: TimerSettings;
  behaviour: BehaviourSettings;
  notifications: NotificationSettings;
  appearance: AppearanceSettings;
};

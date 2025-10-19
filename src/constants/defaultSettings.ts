import type { SettingsState } from "@/types";

export const DEFAULT_SETTINGS: SettingsState = {
  timer: {
    focusLength: 25,
    shortBreakLength: 5,
    longBreakLength: 15,
    roundsUntilLongBreak: 4,
  },
  behaviour: { autoStart: false, displayQuotes: true },
  notifications: {
    popupNotifications: true,
    notificationVolume: 50,
  },
  appearance: { theme: "dark" },
};

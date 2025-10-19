import type { SettingsState } from "@/types";
import { DEFAULT_SETTINGS } from "@/constants/defaultSettings";

export const getSettings = (): SettingsState => {
  // If data exists: return it. Else: return default settings
  const data = window.localStorage.getItem("settingsData");
  if (!data) return DEFAULT_SETTINGS;

  try {
    return JSON.parse(data) as SettingsState;
  } catch {
    return DEFAULT_SETTINGS;
  }
};

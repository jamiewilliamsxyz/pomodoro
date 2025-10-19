import type { SettingsState, SettingsAction } from "@/types";
import { DEFAULT_SETTINGS } from "@/constants/defaultSettings";

export const settingsReducer = (
  state: SettingsState,
  action: SettingsAction
): SettingsState => {
  switch (action.type) {
    case "UPDATE_TIMER":
      return { ...state, timer: { ...state.timer, ...action.payload } };
    case "RESET_TIMER_SETTINGS":
      return { ...state, timer: DEFAULT_SETTINGS.timer };
    case "UPDATE_BEHAVIOUR":
      return { ...state, behaviour: { ...state.behaviour, ...action.payload } };
    case "UPDATE_NOTIFICATIONS":
      return {
        ...state,
        notifications: { ...state.notifications, ...action.payload },
      };
    case "UPDATE_APPEARANCE":
      return {
        ...state,
        appearance: { ...state.appearance, ...action.payload },
      };
    case "SET_SETTINGS":
      return action.payload;

    default:
      return state;
  }
};

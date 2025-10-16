import {
  ActiveSectionState,
  SettingsAction,
  OptionProps,
  Theme,
} from "@/types";

export const dispatchSettingChange = ({
  activeSection,
  id,
  value,
  dispatch,
}: {
  activeSection: ActiveSectionState;
  dispatch: React.Dispatch<SettingsAction>;
} & Pick<OptionProps, "id" | "value">): void => {
  // Function to convert theme value from a boolean to either "light" or "dark"
  const convertThemeValue = () => {
    let themeValue: Theme;
    if (activeSection != "appearance") return; // Would need to change if adding more setting options to appearance
    if (value) {
      // true === light
      themeValue = "light";
    } else {
      // anything else === dark
      themeValue = "dark";
    }
    return themeValue;
  };

  switch (activeSection) {
    case "timer":
      dispatch({
        type: "UPDATE_TIMER",
        payload: { [id]: value },
      });
      break;
    case "behaviour":
      dispatch({
        type: "UPDATE_BEHAVIOUR",
        payload: { [id]: value },
      });
      break;
    case "notifications":
      dispatch({
        type: "UPDATE_NOTIFICATIONS",
        payload: { [id]: value },
      });
      break;
    case "appearance":
      dispatch({
        type: "UPDATE_APPEARANCE",
        payload: { [id]: convertThemeValue() },
      });
      break;
    default:
      console.warn(`No section matches: ${activeSection}`);
  }
};

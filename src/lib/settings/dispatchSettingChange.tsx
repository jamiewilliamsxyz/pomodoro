import { ActiveSectionState, SettingsAction, OptionProps } from "@/types";

export const dispatchSettingChange = ({
  activeSection,
  label,
  value,
  dispatch,
}: {
  activeSection: ActiveSectionState;
  dispatch: React.Dispatch<SettingsAction>;
} & Pick<OptionProps, "label" | "value">): void => {
  switch (activeSection) {
    case "timer":
      dispatch({
        type: "UPDATE_TIMER",
        payload: { [label]: value },
      });
      break;
    case "behaviour":
      dispatch({
        type: "UPDATE_BEHAVIOUR",
        payload: { [label]: value },
      });
      break;
    case "notifications":
      dispatch({
        type: "UPDATE_NOTIFICATIONS",
        payload: { [label]: value },
      });
      break;
    case "appearance":
      dispatch({
        type: "UPDATE_APPEARANCE",
        payload: { [label]: value },
      });
      break;
    default:
      console.warn(`No section matches: ${activeSection}`);
  }
};

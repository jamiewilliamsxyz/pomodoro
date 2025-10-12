import { ActiveSectionState, SettingsAction, OptionProps } from "@/types";

export const dispatchSettingChange = ({
  activeSection,
  id,
  value,
  dispatch,
}: {
  activeSection: ActiveSectionState;
  dispatch: React.Dispatch<SettingsAction>;
} & Pick<OptionProps, "id" | "value">): void => {
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
        payload: { [id]: value },
      });
      break;
    default:
      console.warn(`No section matches: ${activeSection}`);
  }
};

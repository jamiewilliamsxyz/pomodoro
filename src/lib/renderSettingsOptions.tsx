import type { CurrentSettingsState } from "@/types";
import SettingsOption from "@/components/features/settings/settings-content/SettingsOption";

export const renderSettingsOptions = ({
  currentSettings,
}: {
  currentSettings: CurrentSettingsState;
}) => {
  switch (currentSettings) {
    case "Timer":
      return (
        <>
          <SettingsOption label="Focus" type="slider" />
          <SettingsOption label="Short Break" type="slider" />
          <SettingsOption label="Long Break" type="slider" />
          <SettingsOption label="Rounds" type="slider" />
          <SettingsOption label="Reset to Defaults" type="text" />
        </>
      );
    case "Behaviour":
      return (
        <>
          <SettingsOption label="Auto-Start Sessions" type="toggle" />
          <SettingsOption label="Display Quotes" type="toggle" />
        </>
      );
    case "Notifications":
      return (
        <>
          <SettingsOption label="Enable Notifications" type="toggle" />
          <SettingsOption label="Notification Sound" type="toggle" />
          <SettingsOption label="Reset to Default" type="slider" />
        </>
      );
    case "Appearance":
      return (
        <>
          <SettingsOption label="Theme" type="theme" />
        </>
      );
    default:
      return (
        <>
          <p className="text-neutral-500">
            No settings available for this section
          </p>
        </>
      );
  }
};

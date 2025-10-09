import type { SettingsOptionType, CurrentSettingsState } from "@/types";
import Slider from "@/components/ui/Slider";
import Toggle from "@/components/ui/Toggle";
import SegmentedControl from "@/components/ui/SegmentedControl";
import SettingsOption from "@/components/features/settings/settings-content/SettingsOption";

export const renderSettingsOptionControl = ({
  type,
}: {
  type: SettingsOptionType;
}) => {
  switch (type) {
    case "slider":
      return <Slider />;
    case "toggle":
      return <Toggle />;
    case "segmentedControl":
      return <SegmentedControl />;
    default:
      return (
        <>
          <p className="text-neutral-500">
            No settings option control available for this section
          </p>
        </>
      );
  }
};

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
          {/* Move this */}
          <button className="text-[1.05rem] text-neutral-700 text-left mt-1 hover:text-neutral-500 cursor-pointer w-fit">
            Reset to Defaults
          </button>
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
          <SettingsOption label="Notification Volume" type="slider" />
        </>
      );
    case "Appearance":
      return (
        <>
          <SettingsOption label="Theme" type="segmentedControl" />
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

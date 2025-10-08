import type { SettingsOptionType } from "@/types";
import Slider from "@/components/ui/Slider";
import Toggle from "@/components/ui/Toggle";
import TextButton from "@/components/ui/TextButton";
import SegmentedControl from "@/components/ui/SegmentedControl";

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
    case "textButton":
      return <TextButton />;
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

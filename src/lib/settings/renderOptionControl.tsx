import type { SettingsOptionType } from "@/types";
import Slider from "@/components/ui/Slider";
import Toggle from "@/components/ui/Toggle";
import SegmentedControl from "@/components/ui/SegmentedControl";

export const renderOptionControl = ({
  type,
  label,
}: {
  type: SettingsOptionType;
  label: string;
}) => {
  switch (type) {
    case "slider":
      return <Slider id={label} />;
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

import type { OptionProps } from "@/types";
import Slider from "@/components/ui/Slider";
import Toggle from "@/components/ui/Toggle";
import SegmentedControl from "@/components/ui/SegmentedControl";

export const renderOptionControl = ({
  type,
  id,
  value,
  min,
  max,
}: OptionProps) => {
  switch (type) {
    case "slider":
      return (
        <Slider
          id={id}
          value={value as number}
          min={min as number}
          max={max as number}
        />
      ); // Telling TS that onChange won't be null/undefined by using "!"
    case "toggle":
      return <Toggle id={id} value={value as boolean} />;
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

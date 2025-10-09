import type { OptionProps } from "@/types";
import Slider from "@/components/ui/Slider";
import Toggle from "@/components/ui/Toggle";
import SegmentedControl from "@/components/ui/SegmentedControl";

export const renderOptionControl = ({
  type,
  label,
  value,
  min,
  max,
  onChange,
}: OptionProps) => {
  switch (type) {
    case "slider":
      return (
        <Slider
          id={label}
          value={value as number}
          min={min as number}
          max={max as number}
          onChange={onChange!}
        />
      ); // Telling TS that onChange won't be null/undefined
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

import type { OptionProps, Theme } from "@/types";
import Slider from "@/components/ui/Slider";
import Toggle from "@/components/ui/Toggle";
import ThemeToggle from "@/components/ui/ThemeToggle";

export const renderOptionControl = ({
  type,
  id,
  value,
  min,
  max,
  title,
}: OptionProps) => {
  switch (type) {
    case "slider":
      return (
        <Slider
          id={id}
          value={value as number}
          min={min as number}
          max={max as number}
          title={title}
        />
      ); // Telling TS that onChange won't be null/undefined by using "!"
    case "toggle":
      return <Toggle id={id} value={value as boolean} title={title} />;
    case "themeToggle":
      return <ThemeToggle id={id} value={value as Theme} title={title} />;
    default:
      return (
        <>
          <p className="text-base-200 opacity-80">
            No settings option control available for this section
          </p>
        </>
      );
  }
};

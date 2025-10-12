import "@/styles/slider.css";
import { calculatePercentage } from "@/lib/calculatePercentage";
import { dispatchSettingChange } from "@/lib/settings/dispatchSettingChange";
import { useSettings } from "@/context/settingsContext";

const Slider = ({
  id,
  value,
  min,
  max,
}: {
  id: string;
  value: number;
  min: number;
  max: number;
}) => {
  const { dispatch, activeSection } = useSettings();

  const handleChange = (value: number) => {
    dispatchSettingChange({
      activeSection,
      id,
      value,
      dispatch,
    });
  };

  const percentage = calculatePercentage(value, min, max);

  return (
    <label htmlFor={id}>
      <input
        type="range"
        min={min}
        max={max}
        id={id}
        value={value}
        onChange={(e) => handleChange(Number(e.target.value))}
        style={{ "--value": `${percentage}%` } as React.CSSProperties}
        className="slider w-full h-1.5 rounded-full cursor-pointer appearance-none bg-neutral-300"
      />
    </label>
  );
};

export default Slider;

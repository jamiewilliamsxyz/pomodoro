import "@/styles/slider.css";
import { dispatchSettingChange } from "@/lib/settings/dispatchSettingChange";
import { useSettings } from "@/context/settingsContext";

interface SliderProps {
  id: string;
  value: number;
  min: number;
  max: number;
  title: string;
}

const Slider = ({ id, value, min, max, title }: SliderProps) => {
  const { dispatch, activeSection } = useSettings();

  const handleChange = (value: number) => {
    dispatchSettingChange({
      activeSection,
      id,
      value,
      dispatch,
    });
  };

  const calculatePercentage = () => {
    if (max <= min) return 0;
    return ((value - min) / (max - min)) * 100;
  };

  const percentage = calculatePercentage();

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
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label={title}
        className="slider w-full h-1.5 rounded-full cursor-pointer appearance-none bg-neutral-300"
      />
    </label>
  );
};

export default Slider;

import "@/styles/slider.css";
import { calculatePercentage } from "@/lib/calculatePercentage";

const Slider = ({
  id,
  value,
  min,
  max,
  onChange,
}: {
  id: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) => {
  const percentage = calculatePercentage(value, min, max);
  return (
    <input
      type="range"
      min={min}
      max={max}
      id={id}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{ "--value": `${percentage}%` } as React.CSSProperties}
      className="slider w-full h-1.5 rounded-full cursor-pointer appearance-none bg-neutral-300"
    />
  );
};

export default Slider;

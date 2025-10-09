import "@/styles/slider.css";

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
  return (
    <input
      type="range"
      min={min}
      max={max}
      id={id}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{ "--value": `${value}%` } as React.CSSProperties}
      className="slider w-full h-1.5 rounded-full cursor-pointer appearance-none bg-neutral-300"
    />
  );
};

export default Slider;

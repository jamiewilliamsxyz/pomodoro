import { useState } from "react";
import "@/styles/slider.css";

const Slider = () => {
  // Temporary
  const [value, setValue] = useState(50);

  return (
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      style={{ "--value": `${value}%` } as React.CSSProperties}
      className="slider w-full h-1.5 rounded-full cursor-pointer appearance-none bg-neutral-300"
    />
  );
};

export default Slider;

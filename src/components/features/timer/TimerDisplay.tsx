const radius = 122;
const stroke = 11.25;
const diameter = radius * 2 + stroke;

const TimerDisplay = () => {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: diameter, height: diameter }}
    >
      <svg width={diameter} height={diameter}>
        <circle
          cx={radius + stroke / 2}
          cy={radius + stroke / 2}
          r={radius}
          stroke="#e5e5e5"
          strokeWidth={stroke}
          fill="transparent"
        />
      </svg>

      <svg
        className="absolute rotate-[-90deg]"
        width={diameter}
        height={diameter}
      >
        <circle
          cx={radius + stroke / 2}
          cy={radius + stroke / 2}
          r={radius}
          stroke="#6ee7b7"
          strokeWidth={stroke}
          fill="transparent"
          strokeDasharray={2 * Math.PI * radius}
          strokeDashoffset={(2 * Math.PI * radius) / 2}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute flex flex-col items-center gap-5">
        <h2 className="text-xl text-neutral-700">Focus</h2>
        <h3 className="text-center text-6xl font-medium">25:00</h3>
        <h4 className="text-lg text-neutral-700">0/4</h4>
      </div>
    </div>
  );
};

export default TimerDisplay;

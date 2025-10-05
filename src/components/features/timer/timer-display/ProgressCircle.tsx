const ProgressCircle = ({
  diameter,
  radius,
  stroke,
}: {
  diameter: number;
  radius: number;
  stroke: number;
}) => {
  return (
    <>
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
    </>
  );
};

export default ProgressCircle;

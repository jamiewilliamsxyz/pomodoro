import { ProgressCircleProps } from "@/types";

const ProgressCircle = ({
  currentTime,
  totalTime,
  diameter,
  radius,
  stroke,
}: ProgressCircleProps) => {
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - currentTime / totalTime);

  return (
    <>
      <svg width={diameter} height={diameter} className="rotate-[-90deg]">
        {/* Track Circle */}
        <circle
          cx={radius + stroke / 2}
          cy={radius + stroke / 2}
          r={radius}
          stroke="#e5e5e5"
          strokeWidth={stroke}
          fill="transparent"
        />
        {/* Indicator Circle */}
        <circle
          cx={radius + stroke / 2}
          cy={radius + stroke / 2}
          r={radius}
          stroke="#6ee7b7"
          strokeWidth={stroke}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default ProgressCircle;

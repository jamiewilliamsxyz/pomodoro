import type { TimerState } from "@/types";
import { PROGRESS_CIRCLE_DIMENSIONS } from "@/constants/progresCircle";

const { radius, stroke, diameter } = PROGRESS_CIRCLE_DIMENSIONS;

const ProgressCircle = ({
  currentTime,
  totalTime,
}: Pick<TimerState, "currentTime" | "totalTime">) => {
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - currentTime / totalTime); // Offset changes as currentTime changes

  return (
    <>
      <svg width={diameter} height={diameter} className="rotate-[-90deg]">
        {/* Track Circle */}
        <circle
          cx={radius + stroke / 2}
          cy={radius + stroke / 2}
          r={radius}
          strokeWidth={stroke}
          fill="transparent"
          className="stroke-[#e5e5e5] dark:stroke-[#262626]"
        />
        {/* Indicator Circle */}
        <circle
          cx={radius + stroke / 2}
          cy={radius + stroke / 2}
          r={radius}
          stroke="oklch(84.5% 0.143 164.978)"
          strokeWidth={stroke}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-[stroke-dashoffset] duration-500 ease-linear"
        />
      </svg>
    </>
  );
};

export default ProgressCircle;

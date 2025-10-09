import type { TimerState } from "@/types";
import { PROGRESS_CIRCLE_DIMENSIONS } from "@/lib/constants";

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
          className="transition-[stroke-dashoffset] duration-500 ease-linear"
        />
      </svg>
    </>
  );
};

export default ProgressCircle;

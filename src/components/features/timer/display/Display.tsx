import type { TimerState } from "@/types";
import { PROGRESS_CIRCLE_DIMENSIONS } from "@/constants/progresCircle";
import Content from "./Content";
import ProgressCircle from "./ProgressCircle";

type DisplayProps = Omit<TimerState, "isRunning" | "canRestartSession">;

const { diameter } = PROGRESS_CIRCLE_DIMENSIONS;

const Display = ({
  sessionType,
  currentTime,
  totalTime,
  roundNumber,
}: DisplayProps) => {
  return (
    <div
      className={`relative flex items-center justify-center w-${diameter} h-${diameter}`}
    >
      <ProgressCircle currentTime={currentTime} totalTime={totalTime} />
      <Content
        sessionType={sessionType}
        roundNumber={roundNumber}
        currentTime={currentTime}
      />
    </div>
  );
};

export default Display;

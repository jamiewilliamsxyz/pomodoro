import type { TimerState } from "@/types";
import { PROGRESS_CIRCLE_DIMENSIONS } from "@/constants/progresCircle";
import TimerContent from "./TimerContent";
import ProgressCircle from "./ProgressCircle";

type TimerDisplayProps = Omit<TimerState, "isRunning" | "canRestartSession">;

const { diameter } = PROGRESS_CIRCLE_DIMENSIONS;

const TimerDisplay = ({
  sessionType,
  currentTime,
  totalTime,
  roundNumber,
}: TimerDisplayProps) => {
  return (
    <div
      className={`relative flex items-center justify-center w-${diameter} h-${diameter}`}
    >
      <ProgressCircle currentTime={currentTime} totalTime={totalTime} />
      <TimerContent
        sessionType={sessionType}
        roundNumber={roundNumber}
        currentTime={currentTime}
      />
    </div>
  );
};

export default TimerDisplay;

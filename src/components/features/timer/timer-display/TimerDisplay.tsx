import { TimerState } from "@/types";
import TimerContent from "./TimerContent";
import ProgressCircle from "./ProgressCircle";

const radius = 122;
const stroke = 11.25;
const diameter = radius * 2 + stroke;

type TimerDisplayProps = Omit<TimerState, "isRunning" | "canRestartSession">;

const TimerDisplay = ({
  sessionType,
  currentTime,
  roundsCompleted,
}: TimerDisplayProps) => {
  return (
    <div
      className={`relative flex items-center justify-center w-${diameter} h-${diameter}`}
    >
      <ProgressCircle radius={radius} stroke={stroke} diameter={diameter} />
      <TimerContent
        sessionType={sessionType}
        roundsCompleted={roundsCompleted}
        currentTime={currentTime}
      />
    </div>
  );
};

export default TimerDisplay;

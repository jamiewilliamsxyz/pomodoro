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
  totalTime,
  roundNumber,
}: TimerDisplayProps) => {
  return (
    <div
      className={`relative flex items-center justify-center w-${diameter} h-${diameter}`}
    >
      <ProgressCircle
        radius={radius}
        stroke={stroke}
        diameter={diameter}
        currentTime={currentTime}
        totalTime={totalTime}
      />
      <TimerContent
        sessionType={sessionType}
        roundNumber={roundNumber}
        currentTime={currentTime}
      />
    </div>
  );
};

export default TimerDisplay;

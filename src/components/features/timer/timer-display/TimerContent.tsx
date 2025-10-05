import { formatTime } from "@/lib/formatTime";
import { TimerState } from "@/types";

type TimerContentProps = Pick<
  TimerState,
  "sessionType" | "roundsCompleted" | "currentTime"
>;

const TimerContent = ({
  sessionType,
  roundsCompleted,
  currentTime,
}: TimerContentProps) => {
  const { minutes, seconds } = formatTime(currentTime);
  return (
    <div className="absolute flex flex-col items-center gap-5">
      <h2 className="text-xl text-neutral-700">{sessionType}</h2>
      <h3 className="text-center text-6xl font-medium tabular-nums">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </h3>
      <h4 className="text-lg text-neutral-700">{roundsCompleted}/4</h4>
    </div>
  );
};

export default TimerContent;

import { formatTime } from "@/utils/formatTime";
import type { TimerState } from "@/types";
import { useSettings } from "@/context/settingsContext";

type TimerContentProps = Pick<
  TimerState,
  "sessionType" | "roundNumber" | "currentTime"
>;

const TimerContent = ({
  sessionType,
  roundNumber,
  currentTime,
}: TimerContentProps) => {
  const { settings } = useSettings();
  const { minutes, seconds } = formatTime(currentTime);

  return (
    <div className="absolute flex flex-col items-center gap-5">
      <h2 className="text-xl text-base-300">{sessionType}</h2>
      <h3 className="text-center text-6xl font-medium tabular-nums text-base-200">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </h3>
      <h4 className="text-lg text-base-300">
        {roundNumber}/{settings.timer.roundsUntilLongBreak}
      </h4>
    </div>
  );
};

export default TimerContent;

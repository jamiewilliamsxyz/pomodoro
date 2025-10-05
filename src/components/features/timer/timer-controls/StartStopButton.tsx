import { Play, Pause } from "lucide-react";
import { TimerActions, TimerState } from "@/types";

type StartStopButtonProps = Pick<TimerActions, "startStop"> &
  Pick<TimerState, "isRunning">;

const StartStopButton = ({ startStop, isRunning }: StartStopButtonProps) => {
  return (
    <button
      onClick={startStop}
      className="rounded-full text-emerald-300 border-emerald-300 border-2 flex items-center justify-center h-13 w-13"
    >
      {isRunning ? (
        <Pause width={30} height={30} strokeWidth={2} />
      ) : (
        <Play width={30} height={30} strokeWidth={2} />
      )}
    </button>
  );
};

export default StartStopButton;

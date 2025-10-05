import { RotateCcw, SkipForward } from "lucide-react";
import { TimerActions, TimerState } from "@/types";
import SmallTimerButton from "./SmallTimerButton";
import StartStopButton from "./StartStopButton";

type TimerControlsProps = Pick<TimerActions, "startStop"> &
  Pick<TimerState, "isRunning">;

const TimerControls = ({ startStop, isRunning }: TimerControlsProps) => {
  return (
    <div className="flex gap-5 items-center">
      <SmallTimerButton
        icon={<RotateCcw width={20} height={20} strokeWidth={1.5} />}
      />
      <StartStopButton startStop={startStop} isRunning={isRunning} />
      <SmallTimerButton
        icon={<SkipForward width={20} height={20} strokeWidth={1.5} />}
      />
    </div>
  );
};

export default TimerControls;

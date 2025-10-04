import { RotateCcw, SkipForward } from "lucide-react";
import SmallTimerButton from "./SmallTimerButton";
import StartStopButton from "./StartStopButton";

const TimerControls = () => {
  return (
    <div className="flex gap-5 items-center">
      <SmallTimerButton
        icon={<RotateCcw width={20} height={20} strokeWidth={1.5} />}
      />
      <StartStopButton />
      <SmallTimerButton
        icon={<SkipForward width={20} height={20} strokeWidth={1.5} />}
      />
    </div>
  );
};

export default TimerControls;

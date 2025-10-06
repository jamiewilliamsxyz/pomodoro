import { TimerActions, TimerState } from "@/types";
import RestartButton from "./RestartButton";
import SkipButton from "./SkipButton";
import StartStopButton from "./StartStopButton";

type TimerControlsProps = TimerActions &
  Omit<TimerState, "currentTime" | "sessionType" | "roundsCompleted">;

const TimerControls = ({
  startStop,
  restartSession,
  isRunning,
  canRestartSession,
}: TimerControlsProps) => {
  return (
    <div className="flex gap-5 items-center">
      <RestartButton
        restartSession={restartSession}
        canRestartSession={canRestartSession}
      />
      <StartStopButton startStop={startStop} isRunning={isRunning} />
      <SkipButton />
    </div>
  );
};

export default TimerControls;

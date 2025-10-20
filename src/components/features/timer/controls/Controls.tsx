import type { TimerActions, TimerState } from "@/types";
import RestartButton from "./RestartButton";
import SkipButton from "./SkipButton";
import StartStopButton from "./StartStopButton";

type ControlsProps = TimerActions &
  Pick<TimerState, "isRunning" | "canRestartSession">;

const Controls = ({
  startStop,
  restartSession,
  skipSession,
  isRunning,
  canRestartSession,
}: ControlsProps) => {
  return (
    <div className="flex gap-5 items-center">
      <RestartButton
        restartSession={restartSession}
        canRestartSession={canRestartSession}
      />
      <StartStopButton startStop={startStop} isRunning={isRunning} />
      <SkipButton skipSession={skipSession} />
    </div>
  );
};

export default Controls;

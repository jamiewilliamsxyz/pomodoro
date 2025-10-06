import { RotateCcw } from "lucide-react";
import { TimerActions, TimerState } from "@/types";

type RestartButtonProps = Pick<TimerActions, "restartSession"> &
  Pick<TimerState, "canRestartSession">;

const RestartButton = ({
  restartSession,
  canRestartSession,
}: RestartButtonProps) => {
  return (
    <button
      onClick={restartSession}
      className={`${
        canRestartSession
          ? "border-neutral-800 text-neutral-800"
          : "border-neutral-500 text-neutral-500"
      } transition-colors duration-200 rounded-full border-[1.5px] flex items-center justify-center h-10 w-10`}
    >
      <RotateCcw width={20} height={20} strokeWidth={1.5} />
    </button>
  );
};

export default RestartButton;

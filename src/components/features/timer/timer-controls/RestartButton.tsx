import { RotateCcw } from "lucide-react";
import type { TimerActions, TimerState } from "@/types";

type RestartButtonProps = Pick<TimerActions, "restartSession"> &
  Pick<TimerState, "canRestartSession">;

const RestartButton = ({
  restartSession,
  canRestartSession,
}: RestartButtonProps) => {
  return (
    <button
      onClick={restartSession}
      aria-label="Restart timer"
      className={`${
        canRestartSession
          ? "border-base-200 text-base-200 cursor-pointer hover:opacity-70 transition-opacity duration-200"
          : "opacity-45 border-base-200 text-base-200"
      } transition-colors duration-200 rounded-full border-[1.5px] flex items-center justify-center h-10 w-10`}
    >
      <RotateCcw width={20} height={20} strokeWidth={1.5} />
    </button>
  );
};

export default RestartButton;

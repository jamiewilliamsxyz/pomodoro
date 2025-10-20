import { SkipForward } from "lucide-react";
import type { TimerActions } from "@/types";

type SkipButtonProps = Pick<TimerActions, "skipSession">;

const SkipButton = ({ skipSession }: SkipButtonProps) => {
  return (
    <button
      onClick={skipSession}
      aria-label="Skip timer"
      className="rounded-full border-base-200 border-[1.5px] text-base-200 flex items-center justify-center h-10 w-10 cursor-pointer hover:opacity-70 transition-opacity duration-200"
    >
      <SkipForward width={20} height={20} strokeWidth={1.5} />
    </button>
  );
};

export default SkipButton;

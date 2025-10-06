import { SkipForward } from "lucide-react";

import { TimerActions } from "@/types";

type SkipButtonProps = Pick<TimerActions, "skipSession">;

const SkipButton = ({ skipSession }: SkipButtonProps) => {
  return (
    <button
      onClick={skipSession}
      className="rounded-full border-neutral-800 border-[1.5px] text-neutral-800 flex items-center justify-center h-10 w-10"
    >
      <SkipForward width={20} height={20} strokeWidth={1.5} />
    </button>
  );
};

export default SkipButton;

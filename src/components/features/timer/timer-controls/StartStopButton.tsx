import { Play } from "lucide-react";

const StartStopButton = () => {
  return (
    <button className="rounded-full text-emerald-300 border-emerald-300 border-2 flex items-center justify-center h-13 w-13">
      <Play width={30} height={30} strokeWidth={2} />
    </button>
  );
};

export default StartStopButton;

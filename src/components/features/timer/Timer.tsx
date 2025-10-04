import TimerControls from "./timer-controls/TimerControls";
import TimerDisplay from "./TimerDisplay";

const Timer = () => {
  return (
    <div className="flex flex-col items-center gap-7">
      <TimerDisplay />
      <TimerControls />
    </div>
  );
};

export default Timer;

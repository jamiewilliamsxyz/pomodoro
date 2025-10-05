"use client";

import { useTimer } from "@/hooks";
import TimerControls from "./timer-controls/TimerControls";
import TimerDisplay from "./timer-display/TimerDisplay";

const Timer = () => {
  const { isRunning, startStop, sessionType, roundsCompleted, currentTime } =
    useTimer();

  return (
    <div className="flex flex-col items-center gap-7">
      <TimerDisplay
        isRunning={isRunning}
        sessionType={sessionType}
        roundsCompleted={roundsCompleted}
        currentTime={currentTime}
      />
      <TimerControls startStop={startStop} isRunning={isRunning} />
    </div>
  );
};

export default Timer;

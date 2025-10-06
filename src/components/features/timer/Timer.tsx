"use client";

import { useTimer } from "@/hooks";
import TimerControls from "./timer-controls/TimerControls";
import TimerDisplay from "./timer-display/TimerDisplay";

const Timer = () => {
  const {
    isRunning,
    startStop,
    restartSession,
    sessionType,
    roundsCompleted,
    currentTime,
    canRestartSession,
  } = useTimer();

  return (
    <div className="flex flex-col items-center gap-7">
      <TimerDisplay
        sessionType={sessionType}
        roundsCompleted={roundsCompleted}
        currentTime={currentTime}
      />
      <TimerControls
        startStop={startStop}
        isRunning={isRunning}
        restartSession={restartSession}
        canRestartSession={canRestartSession}
      />
    </div>
  );
};

export default Timer;

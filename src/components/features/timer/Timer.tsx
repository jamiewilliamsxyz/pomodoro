"use client";

import { useTimer } from "@/hooks/useTimer";
import TimerControls from "./timer-controls/TimerControls";
import TimerDisplay from "./timer-display/TimerDisplay";

const Timer = () => {
  const {
    startStop,
    restartSession,
    skipSession,
    isRunning,
    sessionType,
    roundNumber,
    currentTime,
    totalTime,
    canRestartSession,
  } = useTimer();

  return (
    <div className="flex flex-col items-center gap-6">
      <TimerDisplay
        sessionType={sessionType}
        currentTime={currentTime}
        totalTime={totalTime}
        roundNumber={roundNumber}
      />
      <TimerControls
        startStop={startStop}
        restartSession={restartSession}
        skipSession={skipSession}
        isRunning={isRunning}
        canRestartSession={canRestartSession}
      />
    </div>
  );
};

export default Timer;

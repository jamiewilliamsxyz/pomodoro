"use client";

import { useTimer } from "@/hooks";
import TimerControls from "./timer-controls/TimerControls";
import TimerDisplay from "./timer-display/TimerDisplay";

const Timer = () => {
  const {
    startStop,
    restartSession,
    skipSession,
    isRunning,
    sessionType,
    currentRound,
    currentTime,
    canRestartSession,
  } = useTimer();

  return (
    <div className="flex flex-col items-center gap-7">
      <TimerDisplay
        sessionType={sessionType}
        currentTime={currentTime}
        currentRound={currentRound}
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

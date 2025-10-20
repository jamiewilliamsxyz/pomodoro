"use client";

import { useTimer } from "@/hooks/useTimer";
import Controls from "./controls/Controls";
import Display from "./display/Display";

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
    <div className="flex flex-col items-center gap-6.5">
      <Display
        sessionType={sessionType}
        currentTime={currentTime}
        totalTime={totalTime}
        roundNumber={roundNumber}
      />
      <Controls
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

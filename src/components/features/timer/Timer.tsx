"use client";

import { useTimer } from "@/hooks/useTimer";
import { useModes } from "@/context/modesContext";
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

  const { isPiPMode } = useModes();
  return (
    <div className="flex flex-col items-center gap-6">
      {isPiPMode ? (
        <p className="text-xl text-neutral-600">
          Picture-in-picture mode is active
        </p>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Timer;

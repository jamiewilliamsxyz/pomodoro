import { useState, useEffect, useRef, useCallback } from "react";
import { TimerRef, SessionType, UseTimerReturn } from "@/types";
import { useToggle } from "@/hooks";

export const useTimer = (): UseTimerReturn => {
  // Setting timer state
  const [isRunning, toggleRunning] = useToggle(false);
  const [currentTime, setCurrentTime] = useState<number>(25 * 60);
  const [sessionType, setSessionType] = useState<SessionType>("Focus");
  const [roundsCompleted, setRoundsCompleted] = useState<number>(0);

  const timerRef = useRef<TimerRef>(null);

  // Wrapping functions in useCallback to prevent recreating them on every re-render
  const startStop = useCallback((): void => {
    toggleRunning();
  }, [toggleRunning]);

  /*
  const skipSession = useCallback(() => {}, []);

  const restartSession = useCallback(() => {}, []);

  const handleSessionEnd = () => {};
  */

  // Countdown
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timerRef.current as NodeJS.Timeout); // clearInterval won't accept null
  }, [isRunning]);

  // Returning functions/state to use in Timer.tsx to pass down
  return {
    startStop,
    isRunning,
    currentTime,
    sessionType,
    roundsCompleted,
    // skipSession
    // restartSession
    // handleSession
  };
};

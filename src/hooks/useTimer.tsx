import { useState, useEffect, useRef, useCallback } from "react";
import { TimerRef, SessionType, UseTimerReturn } from "@/types";
import { useToggle } from "@/hooks";

// Temporary session lengths
const focusLength = 1 * 60;
const shortBreakLength = 5 * 60;
const longBreakLength = 15 * 60;

export const useTimer = (): UseTimerReturn => {
  // Setting timer state
  const [isRunning, toggleRunning] = useToggle(false);
  const [currentTime, setCurrentTime] = useState<number>(focusLength);
  const [sessionType, setSessionType] = useState<SessionType>("Focus");
  const [roundsCompleted, setRoundsCompleted] = useState<number>(0);
  const [canRestartSession, setCanRestartSession] = useState<boolean>(false);

  const timerRef = useRef<TimerRef>(null);

  // Wrapping functions in useCallback to prevent recreating them on every re-render
  const startStop = useCallback((): void => {
    toggleRunning();
  }, [toggleRunning]);

  const handleSessionEnd = useCallback((): void => {
    // Stop & clear timer
    if (isRunning) toggleRunning();
    if (timerRef.current !== null) clearInterval(timerRef.current);

    // Increment rounds completed
    if (sessionType === "Focus") setRoundsCompleted((prev) => prev + 1);

    // Work out which sessionType to move to & set currentTime to the new sessionTypes length
    if (sessionType === "Focus") {
      if (roundsCompleted === 4) {
        setSessionType("Long Break");
        setCurrentTime(longBreakLength);
      } else {
        setSessionType("Short Break");
        setCurrentTime(shortBreakLength);
      }
    } else {
      setSessionType("Focus");
      setCurrentTime(focusLength);
    }
  }, [isRunning, roundsCompleted, sessionType, toggleRunning]);

  const restartSession = useCallback((): void => {
    if (isRunning) toggleRunning();
    if (timerRef.current !== null) clearInterval(timerRef.current);
    switch (sessionType) {
      case "Focus":
        setCurrentTime(focusLength);
        break;
      case "Short Break":
        setCurrentTime(shortBreakLength);
        break;
      case "Long Break":
        setCurrentTime(longBreakLength);
        break;
      default:
        setCurrentTime(focusLength);
        break;
    }
  }, [isRunning, toggleRunning, sessionType, setCurrentTime]);

  const skipSession = useCallback((): void => {
    handleSessionEnd();
  }, [handleSessionEnd]);

  // Put into /lib if reusing
  const getCurrentSessionLength = useCallback((): number => {
    let sessionDuration = focusLength;
    switch (sessionType) {
      case "Short Break":
        sessionDuration = shortBreakLength;
        break;
      case "Long Break":
        sessionDuration = longBreakLength;
        break;
    }
    return sessionDuration;
  }, [sessionType]);

  useEffect(() => {
    // Countdown
    if (isRunning) {
      timerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => prev - 1);
      }, 1000);
    }

    if (currentTime <= 0 && isRunning) handleSessionEnd();

    return () => {
      if (timerRef.current !== null) clearInterval(timerRef.current);
    }; // clearInterval won't accept null
  }, [isRunning, currentTime, handleSessionEnd]);

  useEffect(() => {
    setCanRestartSession(currentTime < getCurrentSessionLength());
  }, [currentTime, getCurrentSessionLength]);

  // Returning functions/state to use in Timer components
  return {
    startStop,
    restartSession,
    skipSession,
    isRunning,
    currentTime,
    sessionType,
    roundsCompleted,
    canRestartSession,
  };
};

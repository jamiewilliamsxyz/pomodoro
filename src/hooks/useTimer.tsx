import { useState, useEffect, useRef, useCallback } from "react";
import { TimerRef, SessionType, UseTimerReturn } from "@/types";
import { useToggle } from "@/hooks";

// Temporary session/rounds lengths
const focusLength = 25 * 60;
const shortBreakLength = 5 * 60;
const longBreakLength = 15 * 60;
const roundsLength = 4;

export const useTimer = (): UseTimerReturn => {
  // Setting timer state
  const [isRunning, toggleRunning] = useToggle(false);
  const [currentTime, setCurrentTime] = useState<number>(focusLength);
  const [sessionType, setSessionType] = useState<SessionType>("Focus");
  const [currentRound, setCurrentRound] = useState<number>(1);
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

    // Work out which sessionType to move, set currentTime and set currentRound accordingly
    if (sessionType === "Focus") {
      if (currentRound === roundsLength) {
        setSessionType("Long Break");
        setCurrentTime(longBreakLength);
      } else {
        setSessionType("Short Break");
        setCurrentTime(shortBreakLength);
      }
    } else {
      setSessionType("Focus");
      setCurrentTime(focusLength);
      setCurrentRound((prev) => prev + 1);
    }

    if (sessionType === "Long Break") {
      setCurrentRound(1);
    }
  }, [isRunning, currentRound, sessionType, toggleRunning]);

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
    currentRound,
    canRestartSession,
  };
};

import { useState, useEffect, useRef, useCallback } from "react";
import { TimerRef, SessionType, UseTimerReturn } from "@/types";
import { useToggle } from "@/hooks";
import { tempSettings } from "@/app/data/tempSettings";

export const useTimer = (): UseTimerReturn => {
  // Setting timer state
  const [isRunning, toggleRunning] = useToggle(false);
  const [currentTime, setCurrentTime] = useState<number>(
    tempSettings.focusLength
  );
  const [totalTime, setTotalTime] = useState<number>(tempSettings.focusLength);
  const [sessionType, setSessionType] = useState<SessionType>("Focus");
  const [roundNumber, setRoundNumber] = useState<number>(1);
  const [canRestartSession, setCanRestartSession] = useState<boolean>(false);

  const timerRef = useRef<TimerRef>(null);

  // Wrapping functions in useCallback to prevent recreating them on every re-render
  const startStop = useCallback((): void => {
    toggleRunning();
  }, [toggleRunning]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      // clearInterval won't accept null
      clearInterval(timerRef.current);
      timerRef.current = null; // Setting timerRef to null since it holds the old interval ID
    }
  }, []);

  const getCurrentSessionLength = useCallback((): number => {
    let sessionDuration = tempSettings.focusLength;
    switch (sessionType) {
      case "Short Break":
        sessionDuration = tempSettings.shortBreakLength;
        break;
      case "Long Break":
        sessionDuration = tempSettings.longBreakLength;
        break;
    }
    return sessionDuration;
  }, [sessionType]);

  const handleSessionEnd = useCallback((): void => {
    // Stop & clear timer
    if (isRunning) toggleRunning();

    clearTimer();

    // Set totalTime for progress circle
    setTotalTime(getCurrentSessionLength());

    // Work out which sessionType to move, set currentTime and set currentRound accordingly
    if (sessionType === "Focus") {
      if (roundNumber === tempSettings.roundsBeforeLongBreak) {
        setSessionType("Long Break");
        setCurrentTime(tempSettings.longBreakLength);
      } else {
        setSessionType("Short Break");
        setCurrentTime(tempSettings.shortBreakLength);
      }
    } else {
      setSessionType("Focus");
      setCurrentTime(tempSettings.focusLength);
      setRoundNumber((prev) => prev + 1);
    }

    if (sessionType === "Long Break") {
      setRoundNumber(1);
    }
  }, [
    isRunning,
    roundNumber,
    sessionType,
    toggleRunning,
    clearTimer,
    getCurrentSessionLength,
  ]);

  const restartSession = useCallback((): void => {
    if (isRunning) toggleRunning();

    clearTimer();

    switch (sessionType) {
      case "Focus":
        setCurrentTime(tempSettings.focusLength);
        break;
      case "Short Break":
        setCurrentTime(tempSettings.shortBreakLength);
        break;
      case "Long Break":
        setCurrentTime(tempSettings.longBreakLength);
        break;
      default:
        setCurrentTime(tempSettings.focusLength);
        break;
    }
  }, [isRunning, sessionType, toggleRunning, setCurrentTime, clearTimer]);

  const skipSession = useCallback((): void => {
    handleSessionEnd();
  }, [handleSessionEnd]);

  useEffect(() => {
    if (currentTime <= 0 && isRunning) {
      handleSessionEnd();
      return;
    }

    // Countdown
    if (isRunning) {
      timerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearTimer();
    };
  }, [isRunning, currentTime, handleSessionEnd, clearTimer]);

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
    totalTime,
    sessionType,
    roundNumber,
    canRestartSession,
  };
};

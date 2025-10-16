import { useState, useEffect, useRef, useCallback } from "react";
import type { TimerRef, SessionType, UseTimerReturn } from "@/types";
import { useNotification } from "./useNotification";
import { useSettings } from "@/context/settingsContext";

export const useTimer = (): UseTimerReturn => {
  const { settings } = useSettings();
  const { requestPermission, notify } = useNotification();

  const {
    focusLength,
    shortBreakLength,
    longBreakLength,
    roundsUntilLongBreak,
  } = settings.timer;

  const { autoStart } = settings.behaviour;

  const focusSeconds = focusLength * 60;
  const shortBreakSeconds = shortBreakLength * 60;
  const longBreakSeconds = longBreakLength * 60;

  // Setting timer state
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(focusSeconds);
  const [totalTime, setTotalTime] = useState<number>(focusSeconds);
  const [sessionType, setSessionType] = useState<SessionType>("Focus");
  const [roundNumber, setRoundNumber] = useState<number>(1);
  const [canRestartSession, setCanRestartSession] = useState<boolean>(false);

  const timerRef = useRef<TimerRef>(null);

  // Wrapping functions in useCallback to prevent recreating them on every re-render
  // startStop is used only on StartStopButton click
  const startStop = useCallback((): void => {
    setIsRunning((prev) => {
      if (!prev) requestPermission(); // Request permission if timer is about to start
      return !prev;
    });
  }, [requestPermission]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      // clearInterval won't accept null
      clearInterval(timerRef.current);
      timerRef.current = null; // Setting timerRef to null since it holds the old interval ID
    }
  }, []);

  const getCurrentSessionLength = useCallback((): number => {
    let sessionDuration = focusSeconds;
    switch (sessionType) {
      case "Short Break":
        sessionDuration = shortBreakSeconds;
        break;
      case "Long Break":
        sessionDuration = longBreakSeconds;
        break;
    }
    return sessionDuration;
  }, [focusSeconds, shortBreakSeconds, longBreakSeconds, sessionType]);

  const handleSessionEnd = useCallback((): void => {
    // Stop timer if autoStart is false then clear timer
    setIsRunning(autoStart);
    clearTimer();

    // Work out which sessionType to move; set currentTime and set roundNumber; notify user
    if (sessionType === "Focus") {
      if (roundNumber === roundsUntilLongBreak) {
        notify({
          currentSession: sessionType,
          nextDuration: longBreakLength,
          nextBreak: "long",
        });
        setSessionType("Long Break");
        setCurrentTime(longBreakSeconds);
        setTotalTime(longBreakSeconds);
      } else {
        notify({
          currentSession: sessionType,
          nextDuration: shortBreakLength,
          nextBreak: "short",
        });
        setSessionType("Short Break");
        setCurrentTime(shortBreakSeconds);
        setTotalTime(shortBreakSeconds);
      }
    } else {
      notify({ currentSession: sessionType, nextDuration: focusLength });
      setSessionType("Focus");
      setCurrentTime(focusSeconds);
      setTotalTime(focusSeconds);
      setRoundNumber((prev) => prev + 1);
    }

    if (sessionType === "Long Break") {
      setRoundNumber(1);
    }
  }, [
    focusSeconds,
    shortBreakSeconds,
    longBreakSeconds,
    roundsUntilLongBreak,
    roundNumber,
    sessionType,
    focusLength,
    shortBreakLength,
    longBreakLength,
    autoStart,
    clearTimer,
    notify,
  ]);

  const restartSession = useCallback((): void => {
    setIsRunning(autoStart);

    clearTimer();

    switch (sessionType) {
      case "Focus":
        setCurrentTime(focusSeconds);
        break;
      case "Short Break":
        setCurrentTime(shortBreakSeconds);
        break;
      case "Long Break":
        setCurrentTime(longBreakSeconds);
        break;
      default:
        setCurrentTime(focusSeconds);
        break;
    }
  }, [
    focusSeconds,
    shortBreakSeconds,
    longBreakSeconds,
    sessionType,
    autoStart,
    clearTimer,
  ]);

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

  // Determine if session can be restarted (for RestartButton state)
  useEffect(() => {
    setCanRestartSession(currentTime < getCurrentSessionLength());
  }, [currentTime, getCurrentSessionLength]);

  // Update totalTime whenever sessionType changes (for ProgressCircle)
  useEffect(() => {
    setTotalTime(getCurrentSessionLength());
  }, [sessionType, getCurrentSessionLength]);

  // Restart session if the active session's length setting changes
  useEffect(() => {
    if (sessionType === "Focus") restartSession();
    // eslint-disable-next-line
  }, [focusLength]);

  useEffect(() => {
    if (sessionType === "Short Break") restartSession();
    // eslint-disable-next-line
  }, [shortBreakLength]);

  useEffect(() => {
    if (sessionType === "Long Break") restartSession();
    // eslint-disable-next-line
  }, [longBreakLength]);

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

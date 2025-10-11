import { useState, useEffect, useRef, useCallback } from "react";
import type { TimerRef, SessionType, UseTimerReturn } from "@/types";
import { useToggle, useNotification } from "@/hooks";
import { useSettings } from "@/context/settingsContext";

export const useTimer = (): UseTimerReturn => {
  const { settings } = useSettings();
  const { requestPermission } = useNotification();

  const { focus, shortBreak, longBreak, rounds } = settings.timer;

  const focusSeconds = focus * 60;
  const shortBreakSeconds = shortBreak * 60;
  const longBreakSeconds = longBreak * 60;

  // Setting timer state
  const [isRunning, toggleRunning] = useToggle(false);
  const [currentTime, setCurrentTime] = useState<number>(focusSeconds);
  const [totalTime, setTotalTime] = useState<number>(focusSeconds);
  const [sessionType, setSessionType] = useState<SessionType>("Focus");
  const [roundNumber, setRoundNumber] = useState<number>(1);
  const [canRestartSession, setCanRestartSession] = useState<boolean>(false);

  const timerRef = useRef<TimerRef>(null);

  // Wrapping functions in useCallback to prevent recreating them on every re-render
  // startStop is used only on StartStopButton click
  const startStop = useCallback((): void => {
    toggleRunning();

    // Request permission if timer has started
    if (!isRunning) {
      requestPermission();
    }
  }, [toggleRunning, requestPermission, isRunning]);

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
    // Stop & clear timer
    if (isRunning) toggleRunning();

    clearTimer();

    // Work out which sessionType to move, set currentTime and set currentRound accordingly
    if (sessionType === "Focus") {
      if (roundNumber === rounds) {
        setSessionType("Long Break");
        setCurrentTime(longBreakSeconds);
        setTotalTime(longBreakSeconds);
      } else {
        setSessionType("Short Break");
        setCurrentTime(shortBreakSeconds);
        setTotalTime(shortBreakSeconds);
      }
    } else {
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
    rounds,
    isRunning,
    roundNumber,
    sessionType,
    toggleRunning,
    clearTimer,
  ]);

  const restartSession = useCallback((): void => {
    if (isRunning) toggleRunning();

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
    isRunning,
    sessionType,
    toggleRunning,
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
  }, [focus]);

  useEffect(() => {
    if (sessionType === "Short Break") restartSession();
    // eslint-disable-next-line
  }, [shortBreak]);

  useEffect(() => {
    if (sessionType === "Long Break") restartSession();
    // eslint-disable-next-line
  }, [longBreak]);

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

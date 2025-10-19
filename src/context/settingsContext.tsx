"use client";

import { useState, useEffect, useReducer, createContext, use } from "react";
import type { SettingsContextType, ActiveSectionState } from "@/types";
import { useAutoSave } from "@/hooks/useAutoSave";
import { getSettings } from "@/lib/settings/getSettings";
import { settingsReducer } from "@/lib/settings/reducer";
import { DEFAULT_SETTINGS } from "@/constants/defaultSettings";

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Track whether localStorage settings have been loaded
  const [loading, setLoading] = useState<boolean>(true);

  // Track which settings section is active
  const [activeSection, setActiveSection] =
    useState<ActiveSectionState>("timer");

  // Reducer for settings
  const [settings, dispatch] = useReducer(settingsReducer, DEFAULT_SETTINGS);

  // Debounced auto-saving to localStorage for settings on every change
  useAutoSave(settings);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = getSettings();
    dispatch({
      type: "SET_SETTINGS",
      payload: savedSettings,
    });
    setLoading(false);
  }, []);

  // Return null instead of rendering children - until settings have been loaded from localStorage (prevents UI flicker)
  if (loading) return null;

  return (
    <SettingsContext
      value={{ activeSection, setActiveSection, settings, dispatch }}
    >
      {children}
    </SettingsContext>
  );
};

export const useSettings = (): SettingsContextType => {
  const context = use(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

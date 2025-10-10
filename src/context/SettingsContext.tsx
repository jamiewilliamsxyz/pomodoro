"use client";

import { useState, useReducer, createContext, use } from "react";
import type {
  SettingsState,
  SettingsContextType,
  ActiveSectionState,
} from "@/types";
import { settingsReducer } from "@/lib/settings/reducer";

const defaultSettings: SettingsState = {
  timer: { focus: 25, shortBreak: 5, longBreak: 15, rounds: 4 },
  behaviour: { autoStart: false, displayQuotes: true },
  notifications: { enable: true, sound: true, volume: 50 },
  appearance: { theme: "system" },
};

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] =
    useState<ActiveSectionState>("timer");

  const [settings, dispatch] = useReducer(settingsReducer, defaultSettings);

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

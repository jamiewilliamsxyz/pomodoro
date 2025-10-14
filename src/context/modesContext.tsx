"use client";

import { createContext, use } from "react";
import type { ModesContextType } from "@/types";
import { useToggle } from "@/hooks/useToggle";

export const ModesContext = createContext<ModesContextType | undefined>(
  undefined
);

export const ModesProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPiPMode, toggleIsPiPMode] = useToggle(false);
  const [isFocusMode, toggleIsFocusMode] = useToggle(false);

  return (
    <ModesContext
      value={{ isPiPMode, isFocusMode, toggleIsPiPMode, toggleIsFocusMode }}
    >
      {children}
    </ModesContext>
  );
};

export const useModes = (): ModesContextType => {
  const context = use(ModesContext);
  if (!context) {
    throw new Error("useModes must be used within a ModesProvider");
  }
  return context;
};

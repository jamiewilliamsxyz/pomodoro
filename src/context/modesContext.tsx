"use client";

import { useState, useEffect, createContext, use } from "react";
import type { ModesContextType } from "@/types";
import { useToggle } from "@/hooks/useToggle";

export const ModesContext = createContext<ModesContextType | undefined>(
  undefined
);

export const ModesProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPiPSupported, setIsPiPSupported] = useState(false);
  const [isPiPMode, toggleIsPiPMode] = useToggle(false);
  const [isFocusMode, toggleIsFocusMode] = useToggle(false);

  // Detect is PiP is supported on mount
  // Made sure this runs only on the client (window is defined)
  useEffect(() => {
    setIsPiPSupported(
      typeof window !== "undefined" && "documentPictureInPicture" in window
    );
  }, []);

  return (
    <ModesContext
      value={{
        isPiPSupported,
        isPiPMode,
        isFocusMode,
        toggleIsPiPMode,
        toggleIsFocusMode,
      }}
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

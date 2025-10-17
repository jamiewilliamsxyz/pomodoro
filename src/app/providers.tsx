// Client side wrapper for context, app overlay (on modal open) and theme listener

"use client";

import { SettingsProvider } from "@/context/settingsContext";
import { ModalProvider } from "@/context/modalContext";
import ThemeListener from "./theme-listener";
import Overlay from "@/components/ui/Overlay";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SettingsProvider>
      <ModalProvider>
        <ThemeListener />
        {children}
        <Overlay />
      </ModalProvider>
    </SettingsProvider>
  );
};

export default Providers;

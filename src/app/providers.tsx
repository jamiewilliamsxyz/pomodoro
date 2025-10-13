"use client";

import { SettingsProvider } from "@/context/settingsContext";
import { ModalProvider } from "@/context/modalContext";
import Overlay from "@/components/ui/Overlay";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SettingsProvider>
      <ModalProvider>
        {children}
        <Overlay />
      </ModalProvider>
    </SettingsProvider>
  );
};

export default Providers;

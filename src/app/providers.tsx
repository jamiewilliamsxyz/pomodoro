"use client";

import { SettingsProvider } from "@/context/settingsContext";
import { ModalProvider } from "@/context/modalContext";
import { ModesProvider } from "@/context/modesContext";
import Overlay from "@/components/ui/Overlay";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SettingsProvider>
      <ModesProvider>
        <ModalProvider>
          {children}
          <Overlay />
        </ModalProvider>
      </ModesProvider>
    </SettingsProvider>
  );
};

export default Providers;

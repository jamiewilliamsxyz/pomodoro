import { useState } from "react";
import type { CurrentSettingsState } from "@/types";
import Popup from "@/components/ui/Popup";
import SettingsTopbar from "./settings-topbar/SettingsTopbar";
import SettingsContent from "./settings-content/SettingsContent";

const SettingsPopup = ({
  isSettingsOpen,
  toggleSettings,
}: {
  isSettingsOpen: boolean;
  toggleSettings: () => void;
}) => {
  const [currentSettings, setCurrentSettings] =
    useState<CurrentSettingsState>("Timer");

  return (
    <Popup isSettingsOpen={isSettingsOpen} toggleSettings={toggleSettings}>
      <SettingsTopbar
        toggleSettings={toggleSettings}
        currentSettings={currentSettings}
        setCurrentSettings={setCurrentSettings}
      />
      <SettingsContent />
    </Popup>
  );
};

export default SettingsPopup;

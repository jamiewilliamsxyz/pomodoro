import { useState } from "react";
import type { ActiveSectionState } from "@/types";
import Popup from "@/components/ui/Popup";
import Topbar from "./Topbar";
import Content from "./Content";

const SettingsModal = ({
  isSettingsOpen,
  toggleSettings,
}: {
  isSettingsOpen: boolean;
  toggleSettings: () => void;
}) => {
  const [activeSection, setActiveSection] =
    useState<ActiveSectionState>("Timer");

  return (
    <Popup isSettingsOpen={isSettingsOpen} toggleSettings={toggleSettings}>
      <div className="flex flex-col gap-3">
        <Topbar
          toggleSettings={toggleSettings}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Content activeSection={activeSection} />
      </div>
    </Popup>
  );
};

export default SettingsModal;

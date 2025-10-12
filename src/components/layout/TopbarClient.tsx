"use client";

import { useToggle } from "@/hooks/useToggle";
import Topbar from "./Topbar";
import SettingsModal from "../features/settings/SettingsModal";

/*
  Making the root layout a client component would make its children client components too,
  TopbarClient is used to avoid that
*/

const TopbarClient = () => {
  const [isSettingsOpen, toggleSettings] = useToggle(false);

  return (
    <>
      <Topbar toggleSettings={toggleSettings} />
      <SettingsModal
        isSettingsOpen={isSettingsOpen}
        toggleSettings={toggleSettings}
      />
    </>
  );
};

export default TopbarClient;

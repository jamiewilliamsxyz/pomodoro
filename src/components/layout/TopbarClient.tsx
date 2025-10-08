"use client";

import { useToggle } from "@/hooks";
import Topbar from "./Topbar";
import SettingsPopup from "../features/settings/SettingsPopup";

/*
  Making the root layout a client component would make its children client components too,
  TopbarClient is used to avoid that
*/

const TopbarClient = () => {
  const [isSettingsOpen, toggleSettings] = useToggle(false);

  return (
    <>
      <Topbar toggleSettings={toggleSettings} />
      <SettingsPopup
        isSettingsOpen={isSettingsOpen}
        toggleSettings={toggleSettings}
      />
    </>
  );
};

export default TopbarClient;

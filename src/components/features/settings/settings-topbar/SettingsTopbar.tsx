import { X, Clock, SlidersHorizontal, Bell, Palette } from "lucide-react";
import type { CurrentSettingsState } from "@/types";
import SettingsTopbarNavItem from "./SettingsTopbarNavItem";

const SettingsTopbar = ({
  toggleSettings,
  setCurrentSettings,
  currentSettings,
}: {
  toggleSettings: () => void;
  setCurrentSettings: (id: CurrentSettingsState) => void;
  currentSettings: CurrentSettingsState;
}) => {
  return (
    <nav className="flex">
      <div className="flex py-3 px-4">
        <button onClick={toggleSettings} className="text-red-400">
          <X width={26} height={26} strokeWidth={1.5} />
        </button>
      </div>

      <ul className="flex justify-evenly bg-[#ececec] rounded-bl-xl pt-3 pb-[7px] w-full">
        {/* Use map when implementing settings logic */}
        <SettingsTopbarNavItem
          id="Timer"
          setCurrentSettings={setCurrentSettings}
          currentSettings={currentSettings}
          icon={<Clock width={24} height={24} strokeWidth={1.25} />}
        />
        <SettingsTopbarNavItem
          id="Behaviour"
          setCurrentSettings={setCurrentSettings}
          currentSettings={currentSettings}
          icon={<SlidersHorizontal width={24} height={24} strokeWidth={1.25} />}
        />
        <SettingsTopbarNavItem
          id="Notifications"
          setCurrentSettings={setCurrentSettings}
          currentSettings={currentSettings}
          icon={<Bell width={24} height={24} strokeWidth={1.25} />}
        />
        <SettingsTopbarNavItem
          id="Appearance"
          setCurrentSettings={setCurrentSettings}
          currentSettings={currentSettings}
          icon={<Palette width={24} height={24} strokeWidth={1.25} />}
        />
      </ul>
    </nav>
  );
};

export default SettingsTopbar;

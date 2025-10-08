import { JSX } from "react";
import type { CurrentSettingsState } from "@/types";

const SettingsTopbarNavItem = ({
  icon,
  id,
  currentSettings,
  setCurrentSettings,
}: {
  icon: JSX.Element;
  id: CurrentSettingsState;
  currentSettings: CurrentSettingsState;
  setCurrentSettings: (id: CurrentSettingsState) => void;
}) => {
  console.log(currentSettings, id);
  return (
    <li className="flex flex-col gap-[5px] group">
      <button
        onClick={() => setCurrentSettings(id)}
        className="hover:cursor-pointer"
      >
        {icon}
      </button>
      <hr
        className={`${
          currentSettings === id ? "opacity-100" : "opacity-0"
        } border-[1.25px] border-emerald-300 rounded-xl group-hover:opacity-100 transition-opacity duration-200`}
      />
    </li>
  );
};

export default SettingsTopbarNavItem;

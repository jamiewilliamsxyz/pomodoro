import { JSX } from "react";
import { X, Clock, SlidersHorizontal, Bell, Palette } from "lucide-react";
import type { ActiveSectionState } from "@/types";
import NavItem from "./NavItem";

const sections: { id: ActiveSectionState; icon: JSX.Element }[] = [
  { id: "timer", icon: <Clock width={24} height={24} strokeWidth={1.25} /> },
  {
    id: "behaviour",
    icon: <SlidersHorizontal width={24} height={24} strokeWidth={1.25} />,
  },
  {
    id: "notifications",
    icon: <Bell width={24} height={24} strokeWidth={1.25} />,
  },
  {
    id: "appearance",
    icon: <Palette width={24} height={24} strokeWidth={1.25} />,
  },
];

const Topbar = ({ toggleSettings }: { toggleSettings: () => void }) => {
  return (
    <nav className="flex">
      <div className="flex py-4 px-4 sm:px-6">
        <button
          onClick={toggleSettings}
          className="text-red-400 hover:text-red-300 transition-colors duration-200 cursor-pointer"
        >
          <X width={28} height={28} strokeWidth={1.5} />
        </button>
      </div>

      <ul className="flex justify-evenly items-center bg-[#ececec] rounded-bl-xl pt-3 pb-[7px] w-full">
        {sections.map((section) => (
          <NavItem
            key={section.id}
            sectionId={section.id}
            icon={section.icon}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Topbar;

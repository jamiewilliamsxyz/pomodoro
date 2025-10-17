import { JSX } from "react";
import { Clock, SlidersHorizontal, Bell, Palette } from "lucide-react";
import type { ActiveSectionState } from "@/types";
import NavItem from "./NavItem";
import CloseModalButton from "@/components/ui/CloseModalButton";

const sections: { id: ActiveSectionState; icon: JSX.Element }[] = [
  {
    id: "timer",
    icon: (
      <Clock
        width={24}
        height={24}
        strokeWidth={1.25}
        className="text-base-200"
      />
    ),
  },
  {
    id: "behaviour",
    icon: (
      <SlidersHorizontal
        width={24}
        height={24}
        strokeWidth={1.25}
        className="text-base-200"
      />
    ),
  },
  {
    id: "notifications",
    icon: (
      <Bell
        width={24}
        height={24}
        strokeWidth={1.25}
        className="text-base-200"
      />
    ),
  },
  {
    id: "appearance",
    icon: (
      <Palette
        width={24}
        height={24}
        strokeWidth={1.25}
        className="text-base-200"
      />
    ),
  },
];

const Topbar = () => {
  return (
    <nav className="flex">
      <div className="flex p-4 sm:px-6">
        <CloseModalButton />
      </div>

      <ul className="flex justify-evenly items-center bg-[#ececec] dark:bg-[#1a1a1a] rounded-bl-xl pt-3 pb-[7px] w-full">
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

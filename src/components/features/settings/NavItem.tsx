import { JSX } from "react";
import type { ActiveSectionState } from "@/types";

const NavItem = ({
  icon,
  sectionId,
  activeSection,
  setActiveSection,
}: {
  icon: JSX.Element;
  sectionId: ActiveSectionState;
  activeSection: ActiveSectionState;
  setActiveSection: (sectionId: ActiveSectionState) => void;
}) => {
  return (
    <li className="flex flex-col gap-[5px] group">
      <button
        onClick={() => setActiveSection(sectionId)}
        className="hover:cursor-pointer"
      >
        {icon}
      </button>
      <hr
        className={`${
          activeSection === sectionId ? "opacity-100" : "opacity-0"
        } border-[1.25px] border-emerald-300 rounded-xl group-hover:opacity-100 transition-opacity duration-200`}
      />
    </li>
  );
};

export default NavItem;

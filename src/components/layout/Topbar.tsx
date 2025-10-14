"use client";

import { Settings } from "lucide-react";
import OpenModalButton from "../ui/OpenModalButton";

const Topbar = () => {
  return (
    <nav className="p-5">
      <div className="max-w-[95rem] mx-auto flex justify-between items-center">
        <OpenModalButton
          modal="settings"
          icon={<Settings width={28} height={28} strokeWidth={1.25} />}
        />
      </div>
    </nav>
  );
};

export default Topbar;

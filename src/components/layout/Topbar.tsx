"use client";

import { EyeClosed, Eye, PictureInPicture2, Settings } from "lucide-react";
import { useModes } from "@/context/modesContext";
import IconButton from "../ui/IconButton";
import OpenModalButton from "../ui/OpenModalButton";

const Topbar = () => {
  const { isPiPSupported, isFocusMode, toggleIsPiPMode, toggleIsFocusMode } =
    useModes();

  return (
    <nav className="p-5">
      {isFocusMode ? (
        <div className="max-w-[95rem] mx-auto flex justify-between items-center">
          <IconButton
            onClick={toggleIsFocusMode}
            icon={<Eye width={28} height={28} strokeWidth={1.25} />}
          />
        </div>
      ) : (
        <div className="max-w-[95rem] mx-auto flex justify-between items-center">
          <div className="flex gap-5">
            <IconButton
              onClick={toggleIsFocusMode}
              icon={<EyeClosed width={28} height={28} strokeWidth={1.25} />}
            />
            {isPiPSupported && (
              <IconButton
                onClick={toggleIsPiPMode}
                icon={
                  <PictureInPicture2
                    width={28}
                    height={28}
                    strokeWidth={1.25}
                  />
                }
              />
            )}
          </div>
          <OpenModalButton
            modal="settings"
            icon={<Settings width={28} height={28} strokeWidth={1.25} />}
          />
        </div>
      )}
    </nav>
  );
};

export default Topbar;

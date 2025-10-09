import { ReactNode } from "react";

const Popup = ({
  children,
  isSettingsOpen,
  toggleSettings,
}: {
  children: ReactNode;
  isSettingsOpen: boolean;
  toggleSettings: () => void;
}) => {
  return (
    // Overlay
    <div
      onClick={toggleSettings}
      className={`${
        isSettingsOpen ? "opacity-100 " : "opacity-0 pointer-events-none"
      } bg-neutral-800/40 backdrop-blur-xs transition-opacity duration-200 fixed inset-0 z-50 flex justify-center`}
    >
      {/* Popup */}
      <div
        // Prevent closing the popup when clicking the actual popup
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative top-[8vh] bg-neutral-50 min-w-10/12 min-h-fit h-fit max-h-9/12 overflow-y-auto rounded-xl shadow-sm transition-all duration-200"
      >
        {children}
      </div>
    </div>
  );
};
export default Popup;

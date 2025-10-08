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
      } bg-neutral-800/40 backdrop-blur-xs transition-opacity duration-200 fixed top-0 left-0 w-full h-full flex items-center justify-center z-50`}
    >
      {/* Popup */}
      <div
        // Prevent closing the popup when clicking the actual popup
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-neutral-50 min-w-10/12 max-h-11/12 overflow-y-scroll rounded-xl shadow-sm p-4"
      >
        {children}
      </div>
    </div>
  );
};
export default Popup;

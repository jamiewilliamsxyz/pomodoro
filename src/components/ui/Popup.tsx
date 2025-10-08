import { ReactNode } from "react";

const Popup = ({
  children,
  isSettingsOpen,
}: {
  children: ReactNode;
  isSettingsOpen: boolean;
}) => {
  return (
    <div
      className={`${
        isSettingsOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-neutral-800/40 backdrop-blur-xs transition-opacity duration-200 fixed top-0 left-0 w-full h-full flex items-center justify-center z-50`}
    >
      <div className="bg-neutral-50">{children}</div>
    </div>
  );
};
export default Popup;

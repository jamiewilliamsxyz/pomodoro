import { useModes } from "@/context/modesContext";

const OpacityOverlay = ({ children }: { children: React.ReactNode }) => {
  const { isFocusMode } = useModes();
  return (
    <div
      className={`contents transition-opacity duration-200 ${
        isFocusMode ? "opacity-0 pointer-events-none" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default OpacityOverlay;

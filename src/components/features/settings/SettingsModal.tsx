import Popup from "@/components/ui/Popup";
import Topbar from "./Topbar";
import Content from "./Content";

const SettingsModal = ({
  isSettingsOpen,
  toggleSettings,
}: {
  isSettingsOpen: boolean;
  toggleSettings: () => void;
}) => {
  return (
    <Popup isSettingsOpen={isSettingsOpen} toggleSettings={toggleSettings}>
      <div className="flex flex-col gap-3">
        <Topbar toggleSettings={toggleSettings} />
        <Content />
      </div>
    </Popup>
  );
};

export default SettingsModal;

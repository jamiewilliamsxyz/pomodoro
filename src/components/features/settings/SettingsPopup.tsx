import Popup from "@/components/ui/Popup";
import SettingsTopbar from "./settings-topbar/SettingsTopbar";
import SettingsContent from "./settings-content/SettingsContent";

const SettingsPopup = ({
  isSettingsOpen,
  toggleSettings,
}: {
  isSettingsOpen: boolean;
  toggleSettings: () => void;
}) => {
  return (
    <Popup isSettingsOpen={isSettingsOpen}>
      <SettingsTopbar toggleSettings={toggleSettings} />
      <SettingsContent />
    </Popup>
  );
};

export default SettingsPopup;

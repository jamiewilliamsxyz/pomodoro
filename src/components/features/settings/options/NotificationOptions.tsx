import { useSettings } from "@/context/settingsContext";
import Option from "../Option";

const NotificationOptions = () => {
  const { settings } = useSettings();

  return (
    <>
      <Option
        title="Enable Popup"
        id="popupNotifications"
        type="toggle"
        value={settings.notifications.popupNotifications}
      />
      <Option
        title="Notification Volume"
        id="notificationVolume"
        type="slider"
        value={settings.notifications.notificationVolume}
        min={0}
        max={100}
      />
    </>
  );
};

export default NotificationOptions;

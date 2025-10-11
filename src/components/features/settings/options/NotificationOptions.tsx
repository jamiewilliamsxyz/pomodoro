import { useSettings } from "@/context/settingsContext";
import Option from "../Option";

const NotificationOptions = () => {
  const { settings } = useSettings();

  return (
    <>
      <Option
        title="Popup Notifications"
        label="popupNotifications"
        type="toggle"
        value={settings.notifications.enable}
      />
      <Option
        title="Notification Sound"
        label="notificationSound"
        type="toggle"
        value={settings.notifications.sound}
      />
      <Option
        title="Volume"
        label="notificationVolume"
        type="slider"
        value={settings.notifications.volume}
        min={1}
        max={100}
      />
    </>
  );
};

export default NotificationOptions;

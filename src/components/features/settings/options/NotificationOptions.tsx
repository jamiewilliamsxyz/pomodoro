import { useSettings } from "@/context/settingsContext";
import Option from "../Option";

const NotificationOptions = () => {
  const { settings } = useSettings();

  return (
    <>
      <Option
        title="Popup Notifications"
        id="popupNotifications"
        type="toggle"
        value={settings.notifications.popupNotifications}
      />
      <Option
        title="Notification Sound"
        id="notificationSound"
        type="toggle"
        value={settings.notifications.notificationSound}
      />
      <Option
        title="Volume"
        id="notificationVolume"
        type="slider"
        value={settings.notifications.notificationVolume}
        min={1}
        max={100}
      />
    </>
  );
};

export default NotificationOptions;

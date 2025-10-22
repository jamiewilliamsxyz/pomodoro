import { useSettings } from "@/context/settingsContext";
import { isMobile } from "@/utils/isMobile";
import Option from "../Option";

const NotificationOptions = () => {
  const { settings } = useSettings();

  return (
    <>
      {isMobile() ? (
        <p className="text-base-200 opacity-80">
          Popup notifications are desktop only
        </p>
      ) : (
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
      )}
    </>
  );
};

export default NotificationOptions;

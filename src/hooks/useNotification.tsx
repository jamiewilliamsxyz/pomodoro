import type { UseNotificationReturn, NotifyProps } from "@/types";
import { useSettings } from "@/context/settingsContext";

export const useNotification = (): UseNotificationReturn => {
  const { settings } = useSettings();

  const { popupNotifications, notificationVolume } = settings.notifications;

  const requestPermission = async (): Promise<void> => {
    // Check browser support
    if (!("Notification" in window)) {
      console.warn("This browser does not support notifications");
      return;
      // Request permission if the user hasn't denied or granted permission
    } else if (Notification.permission === "default") {
      try {
        const permission: NotificationPermission =
          await Notification.requestPermission();

        if (permission === "granted")
          console.info("Notification permission granted");
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Notification permission request failed:", err);
        } else {
          console.warn("Unknown error");
        }
      }
    }
  };

  const playSound = () => {
    const sound = new Audio("/sounds/notification.mp3");
    sound.volume = notificationVolume / 100;
    sound.play();
  };

  const notify = ({ currentSession, nextDuration, nextBreak }: NotifyProps) => {
    if (notificationVolume === 0) playSound();
    if (!popupNotifications) return;

    let title: string;
    let body: string;

    if (currentSession === "Focus") {
      title = "Focus session complete";
      body = `Start a ${nextDuration} minute ${nextBreak} break`;
    } else {
      title = `${
        currentSession === "Long Break"
          ? currentSession.slice(0, 4)
          : currentSession.slice(0, 5)
      } break complete`;
      body = `Start a ${nextDuration} minute focus round`;
    }

    new Notification(title, {
      body: body,
      tag: "timer",
      icon: "/icons/icon.png",
      badge: "/icons/badge.png",
    });
  };

  return {
    requestPermission,
    notify,
  };
};

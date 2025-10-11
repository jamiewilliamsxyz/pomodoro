import type { UseNotificationReturn, NotifyProps } from "@/types";

export const useNotification = (): UseNotificationReturn => {
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

  const notify = ({ currentSession, nextDuration, nextBreak }: NotifyProps) => {
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
    });
  };

  return {
    requestPermission,
    notify,
  };
};

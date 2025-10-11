export const useNotification = (): {
  requestPermission: () => Promise<void>;
} => {
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
          new Notification("Notifications have been enabled");
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Notification permission request failed:", err);
        } else {
          console.warn("Unknown error");
        }
      }
    }
  };

  return {
    requestPermission, // Called on play button click
  };
};

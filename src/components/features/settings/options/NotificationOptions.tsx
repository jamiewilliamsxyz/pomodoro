import Option from "../Option";

const NotificationOptions = () => {
  return (
    <>
      <Option label="Enable Notifications" type="toggle" />
      <Option label="Notification Sound" type="toggle" />
      <Option label="Notification Volume" type="slider" />
    </>
  );
};

export default NotificationOptions;

import Option from "../Option";

const NotificationOptions = () => {
  return (
    <>
      <Option label="enable" type="toggle" />
      <Option label="sound" type="toggle" />
      <Option label="volume" type="slider" />
    </>
  );
};

export default NotificationOptions;

import Option from "../Option";

const TimerOptions = () => {
  return (
    <>
      <Option label="Focus" type="slider" />
      <Option label="Short Break" type="slider" />
      <Option label="Long Break" type="slider" />
      <Option label="Rounds" type="slider" />
      <Option label="Reset to Defaults" type="textButton" />
    </>
  );
};

export default TimerOptions;

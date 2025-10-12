import { useSettings } from "@/context/settingsContext";
import Option from "../Option";

const TimerOptions = () => {
  const { settings } = useSettings();

  return (
    <>
      <Option
        title="Focus"
        id="focus"
        type="slider"
        value={settings.timer.focus}
        min={1}
        max={90}
      />
      <Option
        title="Short Break"
        id="shortBreak"
        type="slider"
        value={settings.timer.shortBreak}
        min={1}
        max={90}
      />
      <Option
        title="Long Break"
        id="longBreak"
        type="slider"
        value={settings.timer.longBreak}
        min={1}
        max={90}
      />
      <Option
        title="Rounds"
        id="rounds"
        type="slider"
        value={settings.timer.rounds}
        min={1}
        max={12}
      />
      <Option
        title="Reset to Defaults"
        id="resetToDefaults"
        type="textButton"
      />
    </>
  );
};

export default TimerOptions;

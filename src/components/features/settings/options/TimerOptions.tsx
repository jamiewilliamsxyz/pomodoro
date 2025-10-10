import { useSettings } from "@/context/SettingsContext";
import Option from "../Option";

const TimerOptions = () => {
  const { settings } = useSettings();

  return (
    <>
      <Option
        title="Focus"
        label="focus"
        type="slider"
        value={settings.timer.focus}
        min={1}
        max={90}
      />
      <Option
        title="Short Break"
        label="shortBreak"
        type="slider"
        value={settings.timer.shortBreak}
        min={1}
        max={90}
      />
      <Option
        title="Long Break"
        label="longBreak"
        type="slider"
        value={settings.timer.longBreak}
        min={1}
        max={90}
      />
      <Option
        title="Rounds"
        label="rounds"
        type="slider"
        value={settings.timer.rounds}
        min={1}
        max={12}
      />
      <Option
        title="Reset to Defaults"
        label="resetToDefaults"
        type="textButton"
      />
    </>
  );
};

export default TimerOptions;

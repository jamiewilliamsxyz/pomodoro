import { useSettings } from "@/context/SettingsContext";
import Option from "../Option";

const TimerOptions = () => {
  const { settings } = useSettings();

  return (
    <>
      <Option
        label="focus"
        type="slider"
        value={settings.timer.focus}
        min={1}
        max={90}
      />
      <Option
        label="shortBreak"
        type="slider"
        value={settings.timer.shortBreak}
        min={1}
        max={90}
      />
      <Option
        label="longBreak"
        type="slider"
        value={settings.timer.longBreak}
        min={1}
        max={90}
      />
      <Option
        label="rounds"
        type="slider"
        value={settings.timer.rounds}
        min={1}
        max={12}
      />
      <Option label="resetToDefaults" type="textButton" />
    </>
  );
};

export default TimerOptions;

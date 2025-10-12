import { useSettings } from "@/context/settingsContext";
import Option from "../Option";

const TimerOptions = () => {
  const { settings } = useSettings();

  return (
    <>
      <Option
        title="Focus"
        id="focusLength"
        type="slider"
        value={settings.timer.focusLength}
        min={1}
        max={90}
      />
      <Option
        title="Short Break"
        id="shortBreakLength"
        type="slider"
        value={settings.timer.shortBreakLength}
        min={1}
        max={90}
      />
      <Option
        title="Long Break"
        id="longBreakLength"
        type="slider"
        value={settings.timer.longBreakLength}
        min={1}
        max={90}
      />
      <Option
        title="Rounds"
        id="roundsUntilLongBreak"
        type="slider"
        value={settings.timer.roundsUntilLongBreak}
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

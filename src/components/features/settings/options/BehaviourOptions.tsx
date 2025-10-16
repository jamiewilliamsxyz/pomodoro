import { useSettings } from "@/context/settingsContext";
import Option from "../Option";

const BehaviourOptions = () => {
  const { settings } = useSettings();
  return (
    <>
      <Option
        title="Auto-start Timers"
        id="autoStart"
        type="toggle"
        value={settings.behaviour.autoStart}
      />
      <Option
        title="Display Quotes"
        id="displayQuotes"
        type="toggle"
        value={settings.behaviour.displayQuotes}
      />
    </>
  );
};

export default BehaviourOptions;

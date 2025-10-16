import { useSettings } from "@/context/settingsContext";
import Option from "../Option";

const AppearanceOptions = () => {
  const { settings } = useSettings();
  return (
    <>
      <Option
        title="Theme"
        id="theme"
        type="themeToggle"
        value={settings.appearance.theme}
      />
    </>
  );
};

export default AppearanceOptions;

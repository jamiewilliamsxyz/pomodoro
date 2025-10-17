import { useEffect } from "react";
import { useSettings } from "@/context/settingsContext";

const ThemeListener = () => {
  const { settings } = useSettings();
  const { theme } = settings.appearance;

  // Change data-theme attribute in the html tag on theme settings change
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return null;
};

export default ThemeListener;

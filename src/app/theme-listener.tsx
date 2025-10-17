import { useEffect } from "react";
import { useSettings } from "@/context/settingsContext";

const ThemeListener = () => {
  const { settings } = useSettings();
  const { theme } = settings.appearance;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return null;
};

export default ThemeListener;

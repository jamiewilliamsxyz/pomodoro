import { useEffect } from "react";
import debounce from "lodash.debounce";
import type { SettingsState } from "@/types";

export const useAutoSave = (settings: SettingsState) => {
  const debouncedSave = debounce((data: SettingsState) => {
    localStorage.setItem("settingsData", JSON.stringify(data));
  }, 1000);

  useEffect(() => {
    debouncedSave(settings);
    return () => {
      debouncedSave.cancel();
    };
  }, [settings]);
};

import { renderSettingsOptions } from "@/lib/renderSettingsOptions";
import type { CurrentSettingsState } from "@/types";

const SettingsContent = ({
  currentSettings,
}: {
  currentSettings: CurrentSettingsState;
}) => {
  return (
    <div className="p-4 flex flex-col gap-3">
      <h5 className="font-medium text-lg text-neutral-800">
        {currentSettings} Settings
      </h5>
      <div className="flex flex-col gap-3">
        {renderSettingsOptions({ currentSettings })}
      </div>
    </div>
  );
};

export default SettingsContent;

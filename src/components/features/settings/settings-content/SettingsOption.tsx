import { renderSettingsOptionControl } from "@/lib/renderSettingsOptionControl";
import type { SettingsOptionType } from "@/types";

const SettingsOption = ({
  label,
  type,
}: {
  label: string;
  type: SettingsOptionType;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between text-neutral-700">
        <label htmlFor={label} className="text-[1.05rem]">
          {label}
        </label>
        <p className="text-base">Current Value</p>
      </div>
      {renderSettingsOptionControl({ type })}
    </div>
  );
};

export default SettingsOption;

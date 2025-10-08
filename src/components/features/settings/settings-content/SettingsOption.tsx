import type { SettingsOptionType } from "@/types";
import Slider from "@/components/ui/Slider";

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
        <p className="text-base">25:00</p>
      </div>
      <Slider />
    </div>
  );
};

export default SettingsOption;

import type { OptionProps } from "@/types";
import { useSettings } from "@/context/settingsContext";
import { renderOptionControl } from "@/lib/settings/renderOptionControl";
import { formatValue } from "@/lib/settings/formatValue";
import { dispatchSettingChange } from "@/lib/settings/dispatchSettingChange";

const Option = ({ title, label, type, value, min, max }: OptionProps) => {
  const { dispatch, activeSection } = useSettings();

  return type === "textButton" ? (
    <button
      onClick={() => dispatch({ type: "RESET_TIMER_SETTINGS" })}
      className="text-[1.05rem] text-neutral-700 text-left mt-1 hover:text-neutral-500 cursor-pointer w-fit"
    >
      Reset to Defaults
    </button>
  ) : (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between text-neutral-700">
        <label htmlFor={label} className="text-[1.05rem]">
          {title}
        </label>
        <div className="bg-[#ececec] rounded-sm px-1.5 flex items-center">
          <p className="text-[0.95rem] leading-[0.95rem] font-mono">
            {formatValue({ value, label })}
          </p>
        </div>
      </div>
      {renderOptionControl({
        title,
        type,
        label,
        value,
        min,
        max,
        onChange: (value) =>
          dispatchSettingChange({
            activeSection,
            label,
            value,
            dispatch,
          }),
      })}
    </div>
  );
};

export default Option;

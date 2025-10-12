import type { OptionProps } from "@/types";
import { useSettings } from "@/context/settingsContext";
import { renderOptionControl } from "@/lib/settings/renderOptionControl";
import { formatValue } from "@/lib/settings/formatValue";

const Option = ({ title, id, type, value, min, max }: OptionProps) => {
  const { dispatch } = useSettings();

  return type === "textButton" ? (
    <button
      onClick={() => dispatch({ type: "RESET_TIMER_SETTINGS" })}
      className="text-[1.05rem] text-neutral-700 text-left mt-1 hover:text-neutral-500 cursor-pointer w-fit"
    >
      Reset to Defaults
    </button>
  ) : (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center text-neutral-700">
        <p className="text-[1.05rem]">{title}</p>
        <div className="bg-[#ececec] rounded-sm px-1.5 pt-1.5 pb-1 flex items-center mb-[-2px]">
          <p className="text-[0.95rem] leading-[0.95rem] font-mono">
            {formatValue({ value, id })}
          </p>
        </div>
      </div>
      {renderOptionControl({
        title,
        type,
        id,
        value,
        min,
        max,
      })}
    </div>
  );
};

export default Option;

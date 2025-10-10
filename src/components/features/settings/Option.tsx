import { renderOptionControl } from "@/lib/settings/renderOptionControl";
import type { OptionProps } from "@/types";
import { useSettings } from "@/context/SettingsContext";
import { formatValue } from "@/lib/settings/formatValue";

const Option = ({ title, label, type, value, min, max }: OptionProps) => {
  const { dispatch } = useSettings();

  const handleChange = (newValue: number | boolean | string) => {
    // Change this if/dispatch when adding the other settings
    if (type === "slider") {
      dispatch({
        type: "UPDATE_TIMER",
        payload: { [label]: newValue },
      });
    }
  };

  return (
    <>
      {type === "textButton" ? (
        <button className="text-[1.05rem] text-neutral-700 text-left mt-1 hover:text-neutral-500 cursor-pointer w-fit">
          Reset to Defaults
        </button>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="flex justify-between text-neutral-700">
            <label htmlFor={label} className="text-[1.05rem]">
              {title}
            </label>
            <p className="text-base">{formatValue({ value, label })}</p>
          </div>
          {renderOptionControl({
            title,
            type,
            label,
            value,
            min,
            max,
            onChange: handleChange,
          })}
        </div>
      )}
    </>
  );
};

export default Option;

import { renderOptionControl } from "@/lib/settings/renderOptionControl";
import type { SettingsOptionType } from "@/types";

const Option = ({
  label,
  type,
}: {
  label: string;
  type: SettingsOptionType;
}) => {
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
              {label}
            </label>
            <p className="text-base">Current Value</p>
          </div>
          {renderOptionControl({ type, label })}
        </div>
      )}
    </>
  );
};

export default Option;

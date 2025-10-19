import { dispatchSettingChange } from "@/lib/settings/dispatchSettingChange";
import { useSettings } from "@/context/settingsContext";

const Toggle = ({
  id,
  value,
  title,
}: {
  id: string;
  value: boolean;
  title: string;
}) => {
  const { dispatch, activeSection } = useSettings();

  const handleChange = (value: boolean) => {
    dispatchSettingChange({
      activeSection,
      id,
      value,
      dispatch,
    });
  };

  return (
    <label
      htmlFor={id}
      className="relative inline-flex items-center cursor-pointer mt-2 max-w-fit"
    >
      <input
        type="checkbox"
        className="sr-only peer"
        id={id}
        checked={value}
        onChange={(e) => {
          handleChange(e.target.checked);
        }}
        role="switch"
        aria-checked={value}
        aria-label={title}
      />
      <div className="group peer bg-base-100 rounded-full duration-200 w-12 h-6 ring-[1.5px] ring-neutral-300 after:duration-200 after:bg-neutral-300 peer-checked:after:bg-emerald-300 after:rounded-full after:absolute after:h-5 after:w-5 after:top-0.5 after:left-0.75 after:flex after:justify-center after:items-center peer-checked:after:translate-x-5.5"></div>
    </label>
  );
};

export default Toggle;

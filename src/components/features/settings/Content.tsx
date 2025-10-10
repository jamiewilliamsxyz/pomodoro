import { renderSectionOptions } from "@/lib/settings/renderSectionOptions";
import { useSettings } from "@/context/SettingsContext";

const Content = () => {
  const { activeSection } = useSettings();

  return (
    <div className="p-4 flex flex-col gap-3">
      <h5 className="font-medium text-lg text-neutral-800">
        {activeSection} Settings
      </h5>
      <div className="flex flex-col gap-3">
        {renderSectionOptions({ activeSection })}
      </div>
    </div>
  );
};

export default Content;

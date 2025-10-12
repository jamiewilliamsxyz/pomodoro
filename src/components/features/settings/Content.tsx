import { renderSectionOptions } from "@/components/features/settings/renderSectionOptions";
import { useSettings } from "@/context/settingsContext";

const Content = () => {
  const { activeSection } = useSettings();

  return (
    <div className="p-4 flex flex-col gap-3">
      <h5 className="font-medium text-lg text-neutral-800">
        {activeSection.charAt(0).toUpperCase() + activeSection.slice(1) + " "}
        Settings
      </h5>
      <div className="flex flex-col gap-4">
        {renderSectionOptions({ activeSection })}
      </div>
    </div>
  );
};

export default Content;

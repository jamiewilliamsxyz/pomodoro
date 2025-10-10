import { renderSectionOptions } from "@/lib/settings/renderSectionOptions";
import { useSettings } from "@/context/settingsContext";
import { capitaliseFirstLetter } from "@/lib/capitaliseFirstLetter";

const Content = () => {
  const { activeSection } = useSettings();

  return (
    <div className="p-4 flex flex-col gap-3">
      <h5 className="font-medium text-lg text-neutral-800">
        {capitaliseFirstLetter(activeSection)} Settings
      </h5>
      <div className="flex flex-col gap-4">
        {renderSectionOptions({ activeSection })}
      </div>
    </div>
  );
};

export default Content;

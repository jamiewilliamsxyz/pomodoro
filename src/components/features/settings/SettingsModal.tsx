import Topbar from "./Topbar";
import Content from "./Content";

const SettingsModal = () => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="relative top-[12vh] bg-neutral-50 min-w-10/12 sm:min-w-sm min-h-fit h-fit max-h-9/12 overflow-y-auto rounded-xl shadow-sm"
    >
      <div className="flex flex-col gap-3">
        <Topbar />
        <Content />
      </div>
    </div>
  );
};

export default SettingsModal;

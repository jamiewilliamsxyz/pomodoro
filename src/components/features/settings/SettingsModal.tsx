import Topbar from "./Topbar";
import Content from "./Content";

const SettingsModal = () => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Settings modal"
      className="relative top-[12vh] bg-base-100 min-w-10/12 sm:min-w-sm min-h-fit h-fit max-h-9/12 overflow-y-auto rounded-xl shadow-sm"
    >
      <div className="flex flex-col gap-3">
        <Topbar />
        <Content />
      </div>
    </div>
  );
};

export default SettingsModal;

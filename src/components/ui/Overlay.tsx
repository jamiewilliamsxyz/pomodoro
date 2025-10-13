import { useModal } from "@/context/modalContext";
import SettingsModal from "@/components/features/settings/SettingsModal";
import InfoModal from "@/components/features/InfoModal";

const Overlay = () => {
  const { closeModal, activeModal } = useModal();

  const renderContent = () => {
    switch (activeModal) {
      case null:
        return null;
      case "settings":
        return <SettingsModal />;
      case "info":
        return <InfoModal />;
      default:
        return null;
    }
  };

  return (
    <div
      onClick={() => closeModal()}
      className={`${
        activeModal != null ? "opacity-100 " : "opacity-0 pointer-events-none"
      } bg-neutral-800/40 backdrop-blur-xs transition-opacity duration-200 fixed inset-0 z-50 flex justify-center`}
    >
      {renderContent()}
    </div>
  );
};
export default Overlay;

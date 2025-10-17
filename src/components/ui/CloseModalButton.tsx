import { X } from "lucide-react";
import { useModal } from "@/context/modalContext";

const CloseModalButton = () => {
  const { closeModal } = useModal();

  return (
    <button
      onClick={() => closeModal()}
      className="w-fit text-red-400 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
    >
      <X width={28} height={28} strokeWidth={1.5} />
    </button>
  );
};

export default CloseModalButton;

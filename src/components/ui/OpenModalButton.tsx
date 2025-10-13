"use client";

import type { ModalTypes } from "@/types";
import { useModal } from "@/context/modalContext";

const OpenModalButton = ({
  icon,
  modal,
}: {
  icon: React.JSX.Element;
  modal: ModalTypes;
}) => {
  const { openModal } = useModal();

  return (
    <button
      onClick={() => openModal(modal)}
      className="text-neutral-800 hover:cursor-pointer hover:text-neutral-500 transition-colors duration-200"
    >
      {icon}
    </button>
  );
};

export default OpenModalButton;

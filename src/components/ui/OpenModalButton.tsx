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
      className="text-base-200 cursor-pointer hover:opacity-70 transition-opacity duration-200"
    >
      {icon}
    </button>
  );
};

export default OpenModalButton;

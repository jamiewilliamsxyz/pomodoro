"use client";

import { useState, createContext, use } from "react";
import type { ModalContextType, ModalTypes } from "@/types";

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeModal, setActiveModal] = useState<ModalTypes>(null);

  const openModal = (modal: ModalTypes) => {
    setActiveModal(modal);
  };

  const closeModal = () => {
    (document.activeElement as HTMLElement)?.blur();
    setActiveModal(null);
  };

  return (
    <ModalContext value={{ activeModal, openModal, closeModal }}>
      {children}
    </ModalContext>
  );
};

export const useModal = (): ModalContextType => {
  const context = use(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

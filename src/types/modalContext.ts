export type ModalTypes = "settings" | "info" | null;

export interface ModalContextType {
  activeModal: ModalTypes;
  openModal: (modal: ModalTypes) => void;
  closeModal: () => void;
}

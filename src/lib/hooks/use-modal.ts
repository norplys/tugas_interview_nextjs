import { useState } from "react";

type Modal = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export function useModal(): Modal {
  const [isOpen, setIsOpen] = useState(false);

  function openModal(): void {
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  return {
    isOpen,
    openModal,
    closeModal,
  };
}
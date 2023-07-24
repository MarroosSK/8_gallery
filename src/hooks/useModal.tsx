import { useState } from "react";

export const useModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return { open, setOpen, handleCloseModal, handleOpenModal };
};

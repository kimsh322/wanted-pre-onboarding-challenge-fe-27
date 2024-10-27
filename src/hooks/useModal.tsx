import { useState } from "react";

interface ModalContents {
  width?: string;
  height?: string;
  children: JSX.Element;
}

const useModal = ({ width = "50%", height = "auto", children }: ModalContents) => {
  const [isOpen, setIsOpen] = useState(false);
  return { width, height, children, isOpen, setIsOpen };
};

export default useModal;

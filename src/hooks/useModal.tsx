import { cloneElement } from "react";
import { useState } from "react";

interface Props {
  width?: string;
  height?: string;
  children: React.ReactElement;
}

const useModal = ({ width = "50%", height = "auto", children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalContents = { width, height, children: cloneElement(children, { setIsOpen }), isOpen, setIsOpen };
  return modalContents;
};

export default useModal;

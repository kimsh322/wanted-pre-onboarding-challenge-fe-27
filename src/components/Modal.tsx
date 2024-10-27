import styled from "styled-components";
import ModalPortal from "./ModalPortal";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
  width: string;
  height: string;
}

function Modal({ isOpen, setIsOpen, children, width, height }: Props) {
  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return (
    <ModalPortal>
      <ModalContainer>
        {isOpen ? (
          <ModalBackdrop onClick={closeModalHandler}>
            <ModalView $width={width} $height={height} onClick={(e) => e.stopPropagation()}>
              {children}
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </ModalPortal>
  );
}

export default Modal;

const ModalContainer = styled.div`
  display: flex;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(128, 128, 128, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  z-index: 99;
`;

const ModalView = styled.div<{ $width: string; $height: string }>`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  max-height: 80vh;
  box-shadow: 2px 3px 5px 0;
  border-radius: 5px;
`;

import styled from "styled-components";
import { colors } from "@/common/styles/styleConstants";

const ModalWrapper = styled('div')<{zindex: number}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${(props) => props.zindex};
`;

const ModalContent = styled('div')`
  background: ${colors.whiteTotal};
  border-radius: 25px;
  height: fit-content;
  width: fit-content;
`;

interface Props {
    isOpen: boolean,
    children?: React.ReactNode,
    zIndex?: number,
}

const Modal = ({ isOpen, children, zIndex }: Props) => {
    if (!isOpen) {
        return null;
    }

    return (
        <ModalWrapper tabIndex={-1} aria-modal="true" role="dialog" zindex={zIndex || 1}>
            <ModalContent>
                {children}
            </ModalContent>
        </ModalWrapper>
    );
}

export default Modal;



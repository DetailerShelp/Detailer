import styled from "styled-components";
import { colors } from "@/common/styles/styleConstants";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { ModalProps } from "@/common/interfaces/Modal";

const ModalWrapper = styled('div') <{ zindex: number }>`
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
  position: relative;
  background: ${colors.whiteTotal};
  border-radius: 25px;
  height: fit-content;
  width: fit-content;
`;

const CloseIcon = styled(SvgHelper)`
    position: absolute;
    top: 30px;
    right: 30px;

    //TODO обсудить стилизацию при наведении и клике
    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }
`

const Modal = ({ isOpen, onClose, closeIcon, children, zIndex }: ModalProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <ModalWrapper tabIndex={-1} aria-modal="true" role="dialog" zindex={zIndex || 1}>
            <ModalContent>
                {closeIcon && <CloseIcon iconName="close" onClick={onClose}></CloseIcon>}
                {children}
            </ModalContent>
        </ModalWrapper>
    );
}

export default Modal;



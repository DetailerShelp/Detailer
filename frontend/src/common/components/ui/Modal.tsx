import styled from "styled-components";
import { borders, colors, transitions } from "@/common/styles/styleConstants";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { ModalProps } from "@/common/interfaces/Modal";
import { useEffect, useState } from "react";
import { flexCenter } from "@/common/styles/mixins";

const ModalWrapper = styled('div') <{ zindex: number }>`
  ${flexCenter}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
  z-index: ${(props) => props.zindex};
`;

const ModalContent = styled('div') <{ visible: boolean }>`
  position: relative;
  background: ${colors.whiteModal};
  border-radius: ${borders.mediumBorderRadius};
  height: fit-content;
  width: fit-content;
  transition: ${transitions.lowTransition};
  transform: ${props => props.visible ? 'scale(1)' : 'scale(0.5)'};
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

const Modal = ({ isOpen, onClose, closeIcon, children, zIndex, style }: ModalProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    }, [isOpen]);
    
    if (!isOpen) {
        return null;
    }

    return (
        <ModalWrapper onClick={onClose} tabIndex={-1} zindex={zIndex || 1}>
            <ModalContent onClick={(e) => e.stopPropagation()} visible={isVisible} style={style}>
                {closeIcon && <CloseIcon iconName="close" onClick={onClose}></CloseIcon>}
                {children}
            </ModalContent>
        </ModalWrapper>
    );
}

export default Modal;


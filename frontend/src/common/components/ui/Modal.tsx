import styled from "styled-components";
import { borders, colors, device, transitions } from "@/common/styles/styleConstants";
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
  overflow: hidden;
  z-index: ${(props) => props.zindex};
  background-color: ${colors.blackTransparent};
`;

const ModalContent = styled('div') <{ visible: boolean }>`
  position: relative;
  background: ${colors.whiteModal};
  border-radius: ${borders.mediumBorderRadius};
  height: fit-content;
  width: fit-content;
  transition: ${transitions.lowTransition};
  transform: ${props => props.visible ? 'scale(1)' : 'scale(0.5)'};

  /* @media ${device.mobileL} {
    width: 100%;
    position: absolute;
    bottom: 0;
    transform: ${props => props.visible ? 'translateY(0px)' : 'translateY(200px)'};
  } */
`;

const CloseIcon = styled(SvgHelper)`
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 10;
    
    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }

`

const Modal = ({ isOpen, onClose, closeIcon, children, zIndex, style }: ModalProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsVisible(true);
        }
        else {
            document.body.style.overflow = 'auto';
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


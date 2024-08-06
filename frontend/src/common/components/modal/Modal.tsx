import styled from "styled-components";
import {
  borders,
  colors,
  device,
  shadows,
  transitions,
} from "@/common/styles/styleConstants";
import { ModalProps } from "@/common/interfaces/Modal";
import { useEffect, useState } from "react";
import { flexCenter } from "@/common/styles/mixins";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { ModalContentWrapper, ModalHeader, ModalWrapper } from "@/common/components/modal/styles";

const ModalSection = styled("section")<{ zindex: number }>`
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

const ModalContent = styled("div")<{ visible: boolean }>`
  position: relative;
  background: ${colors.whiteModal};
  border-radius: ${borders.mediumBorderRadius};
  box-shadow: ${shadows.defaultShadow};
  height: fit-content;
  width: fit-content;
  transition: ${transitions.lowTransition};
  transform: ${(props) => (props.visible ? "scale(1)" : "scale(0.5)")};

  @media ${device.mobileL} {
    border-radius: ${borders.defaultBorderRadius};
  }

  /* @media ${device.mobileL} {
    width: 100%;
    position: absolute;
    bottom: 0;
    transform: ${(props) =>
    props.visible ? "translateY(0px)" : "translateY(200px)"};
  } */
`;

const CloseIconWrapper = styled("div")`
  position: absolute;
  top: 35px;
  right: 35px;
  z-index: 10;

  @media ${device.tablet} {
    top: 30px;
    right: 30px;
  }

  @media ${device.mobile} {
    top: 25px;
    right: 25px;
  }

  @media ${device.mobileL} {
    top: 15px;
    right: 15px;
  }

  @media ${device.mobileM} {
    top: 10px;
    right: 10px;
  }
`;

const Modal = ({
  isOpen,
  onClose,
  closeIcon,
  title,
  children,
  zIndex,
  style,
}: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsVisible(true);
    } else {
      document.body.style.overflow = "auto";
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalSection onClick={onClose} tabIndex={-1} zindex={zIndex || 1}>
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        visible={isVisible}
        style={style}
      >
        {closeIcon && (
          <CloseIconWrapper>
            <ButtonWithIcon
              size={35}
              icon="close"
              title="Закрыть"
              click={onClose}
            />
          </CloseIconWrapper>
        )}
        {!!title ? (
          <ModalWrapper>
            <ModalContentWrapper>
              <ModalHeader>{title}</ModalHeader>
              {children}
            </ModalContentWrapper>
          </ModalWrapper>
        ) : (
          <>{children}</>
        )}
      </ModalContent>
    </ModalSection>
  );
};

export default Modal;

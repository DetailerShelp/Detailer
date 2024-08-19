import { FC } from "react";
import styled from "styled-components";
import Modal from "@/common/components/modal/Modal";
import { ModalProps } from "@/common/interfaces/Modal";
import { clampText, flexCenter } from "@/common/styles/mixins";
import { fonts } from "@/common/styles/styleConstants";
import { ModalConfirmButton } from "@/common/styles/tags/button/ModalConfirmButton";

interface ModalConfirmProps extends ModalProps {
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  headerText?: string;
  okText?: string;
  cancelText?: string;
  style?: React.CSSProperties;
}

interface ModalContentProps {
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  headerText?: string;
  okText?: string;
  cancelText?: string;
}

const ModalWrapper = styled("div")`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled("div")`
  margin: 25px;
  ${flexCenter};
`;

const Header = styled("p")`
  text-align: center;
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
  font-weight: ${fonts.weights.medium};
  margin: 0;
`;

const ButtonList = styled("ul")`
  ${flexCenter}
  width: 100%;
`;

const ButtonItem = styled("li")`
  width: 100%;
`;

const ModalContent: FC<ModalContentProps> = ({
  onOk,
  onCancel,
  headerText,
  okText,
  cancelText,
}) => {
  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onCancel?.(e);
  };

  const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onOk?.(e);
  };
  return (
    <ModalWrapper>
      <ModalHeader>
        <Header>{headerText}</Header>
      </ModalHeader>
      {(!!okText || !!cancelText) && (
        <ButtonList>
          {!!okText && (
            <ButtonItem>
              <ModalConfirmButton
                key="submit"
                title={okText}
                click={handleOk}
              />
            </ButtonItem>
          )}

          {!!cancelText && (
            <ButtonItem>
              <ModalConfirmButton
                key="cancel"
                isRed={true}
                title={cancelText}
                click={handleCancel}
              />
            </ButtonItem>
          )}
        </ButtonList>
      )}
    </ModalWrapper>
  );
};

const ModalConfirm = (props: ModalConfirmProps) => (
  <Modal {...props}>
    <ModalContent
      onOk={props.onOk}
      onCancel={props.onCancel}
      headerText={props.headerText}
      okText={props.okText}
      cancelText={props.cancelText}
    />
  </Modal>
);

export default ModalConfirm;

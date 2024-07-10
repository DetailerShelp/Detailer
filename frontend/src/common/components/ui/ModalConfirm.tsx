import { FC } from 'react';
import styled from "styled-components";
import Modal from '@/common/components/ui/Modal';
import { DefaultButton } from './Button';

interface ModalConfirmProps {
  isOpen: boolean;
  zIndex?: number;
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  headerText?: string;
  okText?: string;
  cancelText?: string;
}

interface ModalContentProps {
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  headerText?: string;
  okText?: string;
  cancelText?: string;
}

const ModalWrapper = styled('div')`
  max-width: 360px;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled('div')`
  margin: 25px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OkButton = styled(DefaultButton)`
  width: 180px;
  padding-block: 15px;
  text-align: center;
  color: black
`;

const CancelButton = styled(DefaultButton)`
  width: 180px;
  padding-block: 15px;
  text-align: center;
  color: red;
`;

const ButtonInner = styled('div')<{ hasbuttons: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.hasbuttons ? 'space-between' : 'center')};
  align-items: center;
`;

const Header = styled('h1')`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  margin: 0;
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
        <ButtonInner hasbuttons={!!okText && !!cancelText}>
          {!!okText && (
            <OkButton key='submit' onClick={handleOk}>
              {okText}
            </OkButton>
          )}
          {!!cancelText && (
            <CancelButton key='cancel' onClick={handleCancel}>
              {cancelText}
            </CancelButton>
          )}
        </ButtonInner>
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

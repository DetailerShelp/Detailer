import { QRCode } from "react-qrcode-logo";
import Modal from "@/common/components/modal/Modal";
import { ModalScrollContentWrapper } from "@/common/components/modal/styles";
import { colors, device } from "@/common/styles/styleConstants";
import { ModalQRButton } from "@/common/styles/tags/button/ModalQRButton";
import styled from "styled-components";
import { flexCenter } from "@/common/styles/mixins";
import { useToast } from "@/common/toast/toast-contex";
import { copyErrorLinkInfo, copyLinkInfo } from "@/common/toast/toastsMessages/copyToasts";

const defaultAvatar = "/images/avatar.svg";

const QrWrapper = styled("div")`
  ${flexCenter}
  height: 100%;
  max-height: 35vh;
  aspect-ratio: 1;
  margin-inline: auto;
`;

const QrButtonsWrapper = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.mobileL} {
    flex-direction: row;
    justify-content: center;
    column-gap: 50px;
  }
`;

interface ModalQRProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  userAvatar?: string;
}

export const ModalQR = ({
  isOpen,
  setOpen,
  title,
  userAvatar,
}: ModalQRProps) => {
  const currentUrl = window.location.href;
  const toast = useToast();

  const copyToClipboard = () => {
    const currentUrl = window.location.href;
    
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        toast?.success(copyLinkInfo);
      })
      .catch(() => {
        toast?.error(copyErrorLinkInfo);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      title={`QR-code ${title}`}
      closeIcon={true}
      zIndex={1002}
    >
      <ModalScrollContentWrapper>
        <QrWrapper>
          <QRCode
            id={currentUrl}
            fgColor={colors.blackTotal}
            bgColor={colors.whiteModal}
            style={{ height: "100%", width: "100%" }}
            qrStyle="fluid"
            value={currentUrl}
            logoImage={!!userAvatar ? userAvatar : defaultAvatar}
            logoWidth={30}
            logoHeight={30}
            logoPadding={3}
            removeQrCodeBehindLogo={true}
            eyeRadius={3}
          />
        </QrWrapper>
        <QrButtonsWrapper>
          <ModalQRButton
            title="Скопировать ссылку"
            icon="copy"
            click={copyToClipboard}
          />
          <ModalQRButton title="Поделиться" icon="shareModal" />
        </QrButtonsWrapper>
      </ModalScrollContentWrapper>
    </Modal>
  );
};

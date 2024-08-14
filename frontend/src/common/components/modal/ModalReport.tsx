import Modal from "@/common/components/modal/Modal";
import { ModalScrollContentWrapper } from "@/common/components/modal/styles";
import styled from "styled-components";
import { clampText, hoverActive, resetButton } from "@/common/styles/mixins";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";

const ReportSubtitle = styled("p")`
  text-align: center;
  font-weight: ${fonts.weights.medium};
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
`;

const ReportList = styled("ul")`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ReportItem = styled("li")`
  width: 100%;

  &:not(:last-child) {
    border-bottom: ${borders.defaultBorder};
  }
`;

const ReportButton = styled("button")`
  ${resetButton}
  width: 100%;
  padding: 15px 25px;
  text-align: start;
  color: ${colors.blackTotal};
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)};

  @media ${device.mobileL} {
    padding: 10px 20px;
  }

  ${hoverActive}
`;

interface ModalReportProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

export const ModalReport = ({ isOpen, setOpen }: ModalReportProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      title="Пожаловаться"
      closeIcon={true}
      zIndex={1002}
    >
      <ModalScrollContentWrapper>
        <ReportSubtitle>
          Почему вы хотите пожаловаться на данный контент?
        </ReportSubtitle>

        <ReportList>
          <ReportItem>
            <ReportButton>Спам</ReportButton>
          </ReportItem>
          <ReportItem>
            <ReportButton>Скам</ReportButton>
          </ReportItem>
          <ReportItem>
            <ReportButton>Откровенный контент</ReportButton>
          </ReportItem>
          <ReportItem>
            <ReportButton>Запрещенка</ReportButton>
          </ReportItem>
          <ReportItem>
            <ReportButton>Нарушение интеллектуальных прав</ReportButton>
          </ReportItem>
        </ReportList>
      </ModalScrollContentWrapper>
    </Modal>
  );
};

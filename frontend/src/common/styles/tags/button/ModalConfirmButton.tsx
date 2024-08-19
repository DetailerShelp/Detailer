import styled from "styled-components";
import { clampText, flexCenter, hoverActive, resetButton } from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";

const Button = styled("button")<{ $isRed?: boolean }>`
  ${resetButton}
  ${flexCenter}
  width: 100%;
  border-radius: ${borders.mediumBorderRadius};
  background-color: transparent;
  color: ${(props) => (props.$isRed ? colors.red : colors.blackTotal)};
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
  text-align: center;
  padding-block: 10px;

  ${hoverActive}
`;

interface ModalConfirmButtonProps {
  isRed?: boolean;
  title: string;
  click: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ModalConfirmButton = ({
  isRed,
  title,
  click,
}: ModalConfirmButtonProps) => {
  return (
    <Button $isRed={isRed} onClick={click}>
      {title}
    </Button>
  );
};

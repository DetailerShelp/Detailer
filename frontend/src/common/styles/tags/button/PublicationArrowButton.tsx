import styled from "styled-components";
import { borders, colors, transitions } from "@/common/styles/styleConstants";
import { flexCenter, resetButton, square } from "@/common/styles/mixins";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";

const Button = styled("button")`
  ${resetButton}
  ${flexCenter}
  width: 50px;
  height: 100%;

  &:hover {
    div {
      transition: ${transitions.fastTransition};
      background-color: ${colors.blackTransparent};
    }
  }
`;

const ButtonWrapper = styled("div")`
  ${flexCenter}
  ${square(40)}
  border-radius: ${borders.circleBorderRadius};
`;

const ButtonIcon = styled(SvgHelper)`
  width: 30px;
  height: 30px;
  color: ${colors.white};
`;

interface PublicationArrowButtonProps {
  title: string;
  click?: () => void;
}

export const PublicationArrowButton = ({
  title,
  click,
}: PublicationArrowButtonProps) => {
  return (
    <Button onClick={click} title={title}>
      <VisuallyHidden>{title}</VisuallyHidden>
      <ButtonWrapper>
        <ButtonIcon iconName="arrowLeft" />
      </ButtonWrapper>
    </Button>
  );
};

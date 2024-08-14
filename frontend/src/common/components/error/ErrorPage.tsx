import {
  clampText,
  flexCenter,
  hoverActive,
  resetButton,
} from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Section = styled("section")`
  ${flexCenter}
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-color: ${colors.whiteModal};
`;

const ErrorText = styled("span")`
  font-size: 150px;
  font-weight: ${fonts.weights.bold};
  color: ${colors.grayText};
  letter-spacing: 5px;
`;

const Button = styled("button")`
  ${resetButton}
  ${flexCenter}
  border-radius: ${borders.defaultBorderRadius};
  padding: 10px 25px;

  ${hoverActive}
`;

const ButtonText = styled("span")`
  ${clampText(fonts.sizes.subTitleMobile, fonts.sizes.subTitle)}
  color: ${colors.blackTotal};
  border-bottom: ${borders.borderBlack};
  padding-bottom: 1px;
  width: 100%;
`;

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <ErrorText>404</ErrorText>
      <Button onClick={() => navigate(-1)}>
        <ButtonText>Вернуться назад</ButtonText>
      </Button>
    </Section>
  );
};

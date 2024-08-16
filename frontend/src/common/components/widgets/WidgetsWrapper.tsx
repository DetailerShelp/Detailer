import { clampText, clampWidth } from "@/common/styles/mixins";
import {
  borders,
  colors,
  fonts,
  shadows,
} from "@/common/styles/styleConstants";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import styled from "styled-components";

export const WidgetWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 25px;

  ${clampWidth(295, 324)}
  padding: 15px;
  background-color: ${colors.whiteTotal};
  border: ${borders.defaultBorder};
  border-radius: ${borders.defaultBorderRadius};
  box-shadow: ${shadows.defaultShadow};
`;

export const WidgetHeaderWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 50px;
  padding-inline: 10px;
`;

export const WidgetTitle = styled("h3")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  text-align: start;
`;

interface WidgetsProps {
  title: string;
  click?: () => void;
  children: React.ReactNode;
}

export const WidgetsWrapper = ({ title, click, children }: WidgetsProps) => {
  return (
    <WidgetWrapper>
      <WidgetHeaderWrapper>
        <WidgetTitle>{title}</WidgetTitle>
        <ButtonWithIcon
          size={25}
          title="Перейти"
          icon="arrowRight"
          click={click}
        />
      </WidgetHeaderWrapper>
      {children}
    </WidgetWrapper>
  );
};

import {
  absCenter,
  clampText,
  clampWidth,
  hoverActive,
  square,
} from "@/common/styles/mixins";
import {
  borders,
  colors,
  fonts,
  shadows,
} from "@/common/styles/styleConstants";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
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

const WidgetLink = styled(NavLink)`
  ${square(25)}
  border-radius: ${borders.circleBorderRadius};
  ${hoverActive}
  position: relative;
`;

const WidgetLinkIcon = styled(SvgHelper)`
  ${absCenter}
  z-index: 1;
  width: 17px;
  height: 17px;
`;

interface WidgetsProps {
  title: string;
  link?: string;
  children: React.ReactNode,
}

export const WidgetsWrapper: FC<WidgetsProps> = ({ title, link, children }) => {
  return (
    <WidgetWrapper>
      <WidgetHeaderWrapper>
        <WidgetTitle>{title}</WidgetTitle>
        {!!link && (
          <WidgetLink to={link ?? "/"}>
            <WidgetLinkIcon iconName="arrowRight" />
          </WidgetLink>
        )}
      </WidgetHeaderWrapper>
      {children}
    </WidgetWrapper>
  );
};

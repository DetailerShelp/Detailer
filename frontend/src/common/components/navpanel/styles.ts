import styled from "styled-components";
import {
  borders,
  colors,
  device,
  fonts,
  shadows,
} from "@/common/styles/styleConstants";
import { NavLink } from "react-router-dom";
import {
  clampText,
  clampWidth,
  flexCenter,
  hoverActive,
  resetLink,
} from "@/common/styles/mixins";

export const NavigationPanel = styled("nav")`
  ${clampWidth(200, 300)}
  background-color: ${colors.whiteTotal};
  border: ${borders.defaultBorder};
  border-radius: ${borders.defaultBorderRadius};
  box-shadow: ${shadows.defaultShadow};

  @media ${device.tablet} {
    width: clamp(230px, 29.3vw, 300px);
  }

  @media ${device.mobile} {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 999;

    ${clampWidth(320, 768)}
    height: 55px;
    ${flexCenter}
    border: none;
    border-radius: 0;
  }
`;

export const NavigationList = styled("ul")`
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    padding-inline: 25px;
  }
`;

export const NavigationItem = styled("li")`
  width: 100%;

  @media ${device.mobileAbove} {
    &:not(:last-child) {
      border-bottom: none;
    }
  }
`;

export const NavigationLink = styled(NavLink)`
  ${resetLink}

  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 15px;
  padding-inline: 25px;
  height: 50px;
  border-radius: ${borders.defaultBorderRadius};

  ${clampText(fonts.sizes.main, fonts.sizes.mainMobile)}
  color: ${colors.grayText};

  &.active {
    color: ${colors.blackTotal};

    svg * {
      color: ${colors.blackTotal};
    }
  }

  ${hoverActive}

  @media ${device.mobile} {
    ${flexCenter}
    flex-direction: column;
    row-gap: 2px;
    height: 55px;
    ${clampText(fonts.sizes.extraSmallMobile, fonts.sizes.extraSmall)}
  }
`;

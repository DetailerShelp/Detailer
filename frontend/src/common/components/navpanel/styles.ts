import styled from "styled-components";
import {
  borders,
  colors,
  device,
  fonts,
} from "@/common/styles/styleConstants";
import { NavLink } from "react-router-dom";
import {
  clampText,
  clampWidth,
  flexCenter,
  hoverActive,
  resetLink,
  styledWrapper,
} from "@/common/styles/mixins";

export const NavigationPanel = styled("nav")`
  ${clampWidth(200, 300)}
  ${styledWrapper}

  @media ${device.tablet} {
    width: clamp(230px, 29.3vw, 300px);
  }

  @media ${device.mobile} {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 999;

    width: 100%;
    height: 55px;
    ${flexCenter}
    border: none;
    border-radius: 0;
  }

  @media ${device.mobileM} {
    height: 50px;
  }
`;

export const NavigationList = styled("ul")`
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-inline: 0;
  }
`;

export const NavigationItem = styled("li")`
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
    width: 70px;
    column-gap: 0;
    padding-inline: 0;
  }

  @media ${device.mobileM} {
    height: 50px;
    width: 60px;
    row-gap: 1px;
  }
`;

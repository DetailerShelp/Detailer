import styled from "styled-components";
import { borders, colors, fonts, shadows } from "@/common/styles/styleConstants";
import { NavLink } from "react-router-dom";
import { clampText, hoverActive, resetLink } from "@/common/styles/mixins";

export const NavigationPanel = styled("nav")`
  width: 100%;
  max-width: 300px;
  background-color: ${colors.whiteTotal};
  border: ${borders.defaultBorder};
  border-radius: ${borders.defaultBorderRadius};
  box-shadow: ${shadows.defaultShadow};
`;

export const NavigationList = styled("ul")`
  display: flex;
  flex-direction: column;
`;

export const NavigationItem = styled("li")`
  width: 100%;

  &:not(:last-child) {
    border-bottom: ${borders.defaultBorder};
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
`;
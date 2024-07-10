import styled from "styled-components";
import { borders, colors, shadows } from "@/common/styles/styleConstants";
import { NavLink } from "react-router-dom";



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
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 15px;
  padding-inline: 25px;
  height: 50px;
  border-radius: ${borders.defaultBorderRadius};

  font-size: 18px;
  text-decoration: none;
  color: ${colors.grayText};

  &.active {
    color: ${colors.blackTotal};
  }

  &:hover {
    background-color: ${colors.whiteBackground};
  }

  &:active {
    background-color: ${colors.grayBorder};
  }
`;
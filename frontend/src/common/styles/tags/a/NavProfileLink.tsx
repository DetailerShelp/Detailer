import styled from "styled-components";
import {
  clampText,
  flexCenter,
  hoverActive,
  square,
} from "@/common/styles/mixins";
import {
  borders,
  colors,
  device,
  fonts,
  transitions,
} from "@/common/styles/styleConstants";
import { NavLink } from "react-router-dom";
import { ImageComponentsTypes } from "@/common/svg-helper";
import { FC } from "react";
import SvgHelper from "@/common/svg-helper/SvgHelper";

export const NavigationList = styled("ul")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavigationItem = styled("li")`
  width: 100%;
  ${flexCenter}
`;

const NavigationLink = styled(NavLink)`
  width: 100%;
  padding-block: 10px;
  border-top-left-radius: ${borders.defaultBorderRadius};
  border-top-right-radius: ${borders.defaultBorderRadius};
  ${flexCenter}
  column-gap: 10px;
  font-weight: ${fonts.weights.medium};
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)};
  color: ${colors.grayText};
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    translate: -50%;
    z-index: 1;
  }

  &::before {
    width: 100%;
    height: 2px;
    background-color: ${colors.grayText};
  }

  &::after {
    width: 0;
    height: 3px;
    background-color: ${colors.blackTotal};
    transition: ${transitions.fastTransition};
  }

  &.active {
    color: ${colors.blackTotal};

    &::after {
      width: 100%;
    }

    svg * {
      color: ${colors.blackTotal};
    }
  }

  ${hoverActive}
`;

const NavigationIcon = styled(SvgHelper)`
  ${square(30)}

  @media ${device.mobileL} {
    ${square(25)}
  }
`;

interface NavProfileLinkProps {
  link: string;
  icon: ImageComponentsTypes;
  title: string;
}

export const NavProfileLink: FC<NavProfileLinkProps> = ({
  link,
  icon,
  title,
}) => {
  return (
    <NavigationItem>
      <NavigationLink to={link}>
        <NavigationIcon iconName={icon} />
        {title}
      </NavigationLink>
    </NavigationItem>
  );
};

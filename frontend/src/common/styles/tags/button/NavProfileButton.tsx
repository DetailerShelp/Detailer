import styled from "styled-components";
import {
  clampText,
  flexCenter,
  hoverActive,
  resetButton,
  square,
} from "@/common/styles/mixins";
import {
  borders,
  colors,
  device,
  fonts,
  transitions,
} from "@/common/styles/styleConstants";
import { ImageComponentsTypes } from "@/common/svg-helper";
import SvgHelper from "@/common/svg-helper/SvgHelper";

export const NavigationList = styled("ul")`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavigationItem = styled("li")`
  width: 100%;
  ${flexCenter}
`;

const NavigationButton = styled("button")<{ $isActive: boolean }>`
  ${resetButton}
  width: 100%;
  padding-block: 10px;
  border-top-left-radius: ${borders.defaultBorderRadius};
  border-top-right-radius: ${borders.defaultBorderRadius};
  ${flexCenter}
  column-gap: 10px;
  font-weight: ${fonts.weights.medium};
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)};
  color: ${(props) => (props.$isActive ? colors.blackTotal : colors.grayText)};
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
    background-color: ${(props) => !props.$isActive && colors.grayText};
  }

  &::after {
    width: ${(props) => (props.$isActive ? "100%" : "0%")};
    height: 3px;
    background-color: ${(props) => props.$isActive && colors.blackTotal};
    transition: ${transitions.fastTransition};
  }

  svg * {
    color: ${(props) => (props.$isActive ? colors.blackTotal : colors.grayText)};
  }

  span {
    @media ${device.mobileM} {
      display: none;
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

interface NavProfileButtonProps {
  isActive: boolean;
  click: () => void;
  icon: ImageComponentsTypes;
  title: string;
}

export const NavProfileButton = ({
  isActive,
  click,
  icon,
  title,
}: NavProfileButtonProps) => {
  return (
    <NavigationItem>
      <NavigationButton $isActive={isActive} onClick={click}>
        <NavigationIcon iconName={icon} />
        <span>{title}</span>
      </NavigationButton>
    </NavigationItem>
  );
};

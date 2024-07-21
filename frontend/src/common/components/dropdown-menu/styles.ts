import { clampText } from "@/common/styles/mixins";
import {
  borders,
  colors,
  device,
  fonts,
  shadows,
} from "@/common/styles/styleConstants";
import styled from "styled-components";

export const DropdownWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const DropdownList = styled("ul")`
  background-color: ${colors.whiteBackground};
  border: ${borders.defaultBorder};
  border-radius: ${borders.defaultBorderRadius};
  box-shadow: ${shadows.defaultShadow};

  position: absolute;
  top: 35px;
  left: 50%;
  translate: -50%;
  z-index: 1;

  animation: shows 0.3s ease;

  @keyframes shows {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media ${device.tablet} {
    position: absolute;
    top: 35px;
    left: -150%;
    z-index: 1;
  }
`;

export const DropdownItem = styled("li")`
  width: 100%;

  &:not(:last-child) {
    border-bottom: ${borders.defaultBorder};
  }
`;

export const DropdownLink = styled("a")<{ isRed?: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 10px 20px;

  white-space: nowrap;
  color: ${(props) => (props.isRed ? colors.red : colors.blackTotal)};
  ${clampText(fonts.sizes.dropdownMobile, fonts.sizes.dropdown)}
  border-radius: ${borders.defaultBorderRadius};

  &.active {
    color: ${colors.blackTotal};

    svg * {
      color: ${colors.blackTotal};
    }
  }

  &:hover {
    background-color: ${colors.whiteModal};
  }

  &:active {
    background-color: ${colors.grayBorder};
  }

  @media ${device.mobile} {
    padding: 10px 15px;
  }
`;

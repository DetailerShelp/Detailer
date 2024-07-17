import {
  clampText,
  flexCenter,
  resetLink,
  square,
} from "@/common/styles/mixins";
import {
  borders,
  colors,
  fonts,
  transitions,
} from "@/common/styles/styleConstants";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AccountsList = styled("ul")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
`;

export const AccountsListItem = styled("li")`
  ${flexCenter}
`;

export const AccountsLink = styled(NavLink)`
  ${resetLink}
  ${flexCenter}
  flex-direction: column;
  row-gap: 3px;
  text-align: center;
    color: ${colors.grayText};

  &:hover,
  &:active,
  &.active {
    transition: ${transitions.fastTransition};
    color: ${colors.blackTotal};

    svg * {
      color: ${colors.blackTotal};
    }
  }
`;

export const AccountsAvatar = styled("img")`
  ${square(40)}
  border-radius: ${borders.circleBorderRadius};
`;

export const AccountsName = styled("p")`
  ${clampText(fonts.sizes.extraSmallMobile, fonts.sizes.extraSmall)}
  font-weight: ${fonts.weights.medium};
`;

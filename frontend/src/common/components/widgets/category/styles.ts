import { clampText, resetLink, square } from "@/common/styles/mixins";
import {
  borders,
  colors,
  fonts,
  transitions,
} from "@/common/styles/styleConstants";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CategoryList = styled("ul")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
`;

export const CategoryListItem = styled("li")``;

export const CategoryLink = styled(NavLink)`
  ${resetLink}

  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${colors.grayText};
  transition: ${transitions.fastTransition};

  &:hover,
  &:active,
  &.active {
    color: ${colors.blackTotal};

    svg * {
      color: ${colors.blackTotal};
    }
  }
`;

export const CategoryLinkIconWrapper = styled("div")`
  ${square(40)}
  border-radius: ${borders.circleBorderRadius};
  position: relative;
`;

export const CategoryLinkTitle = styled("p")`
  text-align: center;
  ${clampText(fonts.sizes.extraSmall, fonts.sizes.extraSmallMobile)}
`;

import { clampText, square } from "@/common/styles/mixins";
import {
  borders,
  colors,
  fonts,
  shadows,
} from "@/common/styles/styleConstants";
import styled from "styled-components";

export const PostWrapper = styled("div")`
  width: 100%;
  border: ${borders.defaultBorder};
  border-radius: ${borders.defaultBorderRadius};
  background-color: ${colors.whiteTotal};
  box-shadow: ${shadows.defaultShadow};

  display: flex;
  flex-direction: column;
`;

export const PostTopBarWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
  padding: 15px 25px;
`;

export const PostUserWrapper = styled("div")`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const PostUserAvatar = styled("img")`
  ${square(40)}
  border-radius: ${borders.circleBorderRadius};
`;

export const PostUserName = styled("p")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
`;

export const PostMenuWrapper = styled("div")`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

export const PostPublication = styled("img")`
  width: 100%;
  aspect-ratio: 1;
`;

export const PostBottomWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
  padding: 15px 25px;
`;

export const PostBotomList = styled("ul")`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;

export const PostBottomItem = styled("li")`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const PostDescription = styled("p")`
  padding-inline: 25px;
  font-size: 15px;
`;

export const PostTime = styled("time")`
  font-size: 12px;
  color: ${colors.grayAccent};
  text-align: start;
  padding: 10px 25px 25px;
`;

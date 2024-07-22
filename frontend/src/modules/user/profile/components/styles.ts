import {
  clampHeight,
  clampText,
  flexCenter,
  hoverActive,
  resetLink,
  square,
} from "@/common/styles/mixins";
import {
  borders,
  colors,
  fonts,
  shadows,
} from "@/common/styles/styleConstants";
import styled from "styled-components";

export const ProfileWrapper = styled("div")`
  width: 100%;
  background-color: ${colors.whiteTotal};
  border: ${borders.defaultBorder};
  border-top-left-radius: ${borders.defaultBorderRadius};
  border-top-right-radius: ${borders.defaultBorderRadius};
  box-shadow: ${shadows.defaultShadow};
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const ProfileBackgroundWrapper = styled("div")`
  position: relative;
  width: 100%;
  ${clampHeight(200, 250)}
  border-radius: inherit;
`;

export const ProfileBackgroundImage = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  width: inherit;
  ${clampHeight(165, 200)}
  object-fit: cover;
  object-position: center;
  border-radius: inherit;
  margin-bottom: 50px;
`;

export const ProfileMoreWrapper = styled("div")`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 2;
`;

export const ProfileButtonMoreWrapper = styled("div")`
  ${square(35)}
  ${flexCenter}
  border-radius: ${borders.circleBorderRadius};
  background-color: ${colors.grayBackground};
`;

export const ProfileUserHeaderWrapper = styled("div")`
  position: absolute;
  bottom: 0;
  left: 25px;
  z-index: 1;

  display: flex;
  align-items: center;
  column-gap: 15px;
`;

export const ProfileUserAvatar = styled("img")`
  ${square(100)}
  border: ${borders.avatarBorder};
  border-radius: ${borders.circleBorderRadius};
`;

export const ProfileUserName = styled("h2")`
  font-weight: ${fonts.weights.medium};
  ${clampText(fonts.sizes.subTitleMobile, fonts.sizes.subTitle)}
  margin-block: auto 13px;
`;

export const ProfileUserDescription = styled("p")`
  margin-inline: 25px;
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)};
`;

export const ProfileButtonsWrapper = styled("div")`
  margin-inline: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
`;

export const ProfileRaitingList = styled("ul")`
  ${flexCenter}
  column-gap: 60px;
  margin-inline: 25px;
`;

export const ProfileRaitingItem = styled("li")``;

export const ProfileRaitingLink = styled("a")`
  ${resetLink}
  ${flexCenter}
  text-align: center;
  font-weight: ${fonts.weights.medium};
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
  border-radius: ${borders.thinBorderRadius};
  padding-inline: 10px;
  ${hoverActive}
`;

export const ProfileContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  margin: 0 1px 5px;
`;

export const ProfileContentList = styled("ul")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;

export const ProfileContentItem = styled("li")`
  width: 100%;
  max-width: 178px;
  aspect-ratio: 1;
`;

export const ProfileContentImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: ${borders.smallBorderRadius};
`;

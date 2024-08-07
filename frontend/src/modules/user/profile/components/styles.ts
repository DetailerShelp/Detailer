import {
  clampHeight,
  clampText,
  clampWidth,
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
  shadows,
} from "@/common/styles/styleConstants";
import styled from "styled-components";

export const ProfileWrapper = styled("div")`
  width: 100%;
  background-color: ${colors.whiteTotal};
  border: ${borders.defaultBorder};
  border-radius: ${borders.defaultBorderRadius};
  box-shadow: ${shadows.defaultShadow};
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  @media ${device.tablet} {
    row-gap: 10px;
  }

  @media ${device.mobileM} {
    row-gap: 5px;
  }
`;

export const ProfileBackgroundWrapper = styled("div")`
  position: relative;
  width: 100%;
  ${clampHeight(200, 250)}
  border-radius: inherit;
`;

export const ProfileBackgroungImageWrapper = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  width: inherit;
  ${clampHeight(165, 200)}
  border-radius: inherit;
`;

export const ProfileBackgroundImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: inherit;
`;

export const ProfileBackWrapper = styled("div")`
  position: absolute;
  top: 25px;
  left: 25px;
  z-index: 2;

  ${square(35)}
  ${flexCenter}
  border-radius: ${borders.circleBorderRadius};
  background-color: ${colors.blackBackground};

  @media ${device.tablet} {
    top: 20px;
    left: 20px;
  }

  @media ${device.mobileL} {
    top: 15px;
    left: 15px;
  }
`;

export const ProfileMoreWrapper = styled("div")`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 2;

  @media ${device.tablet} {
    top: 20px;
    right: 20px;
  }

  @media ${device.mobileL} {
    top: 15px;
    right: 15px;
  }
`;

export const ProfileButtonMoreWrapper = styled("div")`
  ${square(35)}
  ${flexCenter}
  border-radius: ${borders.circleBorderRadius};
  background-color: ${colors.blackBackground};
`;

export const ProfileUserHeaderWrapper = styled("div")`
  position: absolute;
  bottom: 0;
  left: 25px;
  z-index: 1;

  display: flex;
  align-items: center;
  column-gap: 15px;

  @media ${device.tablet} {
    left: 20px;
    column-gap: 10px;
  }

  @media ${device.mobileL} {
    left: 15px;
    column-gap: 5px;
  }
`;

export const ProfileUserAvatarWrapper = styled("div")`
  ${square(100)}
  border: ${borders.avatarBorder};
  border-radius: ${borders.circleBorderRadius};

  @media ${device.mobile} {
    ${square(85)}
  }
`;

export const ProfileUserAvatar = styled("img")`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
  object-position: center;
`;

export const ProfileUserName = styled("h2")`
  font-weight: ${fonts.weights.medium};
  ${clampText(fonts.sizes.subTitleMobile, fonts.sizes.subTitle)}
  margin-block: auto 13px;

  @media ${device.tablet} {
    margin-block: auto 5px;
  }
`;

export const ProfileUserDescription = styled("p")`
  margin-inline: 25px;
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)};

  @media ${device.tablet} {
    margin-inline: 20px;
  }

  @media ${device.mobileL} {
    margin-inline: 15px;
  }
`;

export const ProfileButtonsWrapper = styled("div")`
  ${flexCenter}
  margin-inline: 25px;
  column-gap: 15px;

  @media ${device.tablet} {
    margin-inline: 20px;
  }

  @media ${device.mobileAbove} {
    justify-content: space-between;
  }
`;

export const ProfileHideButtonWrapper = styled("div")`
  @media ${device.mobileL} {
    display: none;
  }
`;

export const ProfileRaitingList = styled("ul")`
  ${flexCenter}
  column-gap: 60px;
  margin-inline: 25px;

  @media ${device.tablet} {
    margin-inline: 20px;
    column-gap: 50px;
  }

  @media ${device.mobileL} {
    margin-inline: 15px;
    column-gap: 20px;
  }

  @media ${device.mobileM} {
    column-gap: 5px;
  }
`;

export const ProfileRaitingItem = styled("li")`
  ${clampWidth(85, 150)}
`;

export const ProfileRaitingButton = styled("button")`
  ${resetButton}
  ${flexCenter}
  width: 100%;
  text-align: center;
  font-weight: ${fonts.weights.medium};
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
  color: ${colors.blackTotal};
  border-radius: ${borders.thinBorderRadius};
  ${hoverActive}
`;

export const ProfileContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  margin-inline: 1px;
`;

import {
  absCenter,
  clampHeight,
  clampText,
  flexCenter,
  square,
  styledWrapper,
} from "@/common/styles/mixins";
import {
  borders,
  colors,
  device,
  fonts,
  transitions,
} from "@/common/styles/styleConstants";
import styled from "styled-components";

export const EditProfileWrapper = styled("div")`
  ${styledWrapper}
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const EditProfileHeader = styled("header")`
  width: 100%;
  height: 50px;
  border-bottom: ${borders.defaultBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 25px;
  padding-inline: 20px;

  @media ${device.mobile} {
    width: clamp(300px, 89vw, 548px);
  }
`;

export const EditProfileTitle = styled("h2")`
  text-align: center;
  font-size: ${(fonts.sizes.titleMobile, fonts.sizes.title)};
  font-weight: ${fonts.weights.semiBold};
`;

export const EditProfileContent = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const EditProfileBackgroundWrapper = styled("div")`
  position: relative;
  width: 100%;
  ${clampHeight(200, 250)}
`;

export const EditProfileBackgroundImage = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  width: inherit;
  ${clampHeight(165, 200)}
  object-fit: cover;
  object-position: center;
  border-radius: ${borders.defaultBorderRadius};
`;

export const EditProfileButtonWrapper = styled("div")<{ $position: string }>`
  position: absolute;
  top: 20px;
  left: ${(props) => props.$position === "left" && "20px"};
  right: ${(props) => props.$position === "right" && "20px"};
  z-index: 2;

  ${flexCenter}
  ${square(35)};
  border-radius: ${borders.circleBorderRadius};
  background-color: ${colors.blackBackground};

  @media ${device.tablet} {
    top: 15px;
    left: ${(props) => props.$position === "left" && "15px"};
    right: ${(props) => props.$position === "right" && "15px"};
  }

  @media ${device.mobileL} {
    top: 10px;
    left: ${(props) => props.$position === "left" && "10px"};
    right: ${(props) => props.$position === "right" && "10px"};
  }
`;

export const EditProfileUserHeaderWrapper = styled("div")`
  position: absolute;
  bottom: 0;
  left: 20px;
  z-index: 1;

  display: flex;
  align-items: center;
  column-gap: 15px;

  @media ${device.tablet} {
    left: 15px;
    column-gap: 10px;
  }

  @media ${device.mobileL} {
    left: 10px;
    column-gap: 5px;
  }
`;

export const EditProfileUserAvatarWrapper = styled("div")`
  ${flexCenter}
  ${square(100)}
border: ${borders.avatarBorder};
  border-radius: ${borders.circleBorderRadius};
  position: relative;

  @media ${device.mobile} {
    ${square(85)}
  }
`;

export const EditProfileAvatarButtonWrapper = styled("div")`
  ${flexCenter}
  ${absCenter}
  z-index: 1;
  ${square(100)}
  border-radius: inherit;
  transition: ${transitions.fastTransition};
  opacity: 0;

  &:hover {
    opacity: 1;
  }

  @media ${device.mobile} {
    ${square(85)}
  }
`;

export const EditProfileUserAvatar = styled("img")`
  ${square(100)}
  border-radius: inherit;
  object-fit: cover;
  object-position: center;

  @media ${device.mobile} {
    ${square(85)}
  }
`;

export const EditProfileUserName = styled("h3")`
  font-weight: ${fonts.weights.medium};
  ${clampText(fonts.sizes.subTitleMobile, fonts.sizes.subTitle)}
  margin-block: auto 10px;

  @media ${device.tablet} {
    margin-block: auto 5px;
  }
`;

export const EditProfileUserDescriptionWrpper = styled("div")`
  margin: 0 20px 20px;

  @media ${device.tablet} {
    margin: 0 15px 15px;
  }

  @media ${device.mobileL} {
    margin: 0 10px 10px;
  }
`;

import {
  clampText,
  clampWidth,
  flexCenter,
  hoverActive,
  opacityHoverActive,
  square,
} from "@/common/styles/mixins";
import {
  borders,
  colors,
  device,
  fonts,
  transitions,
} from "@/common/styles/styleConstants";
import styled from "styled-components";

export const ProfilePostList = styled("ul")`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin-bottom: 5px;

  @media ${device.mobileL} {
    gap: 3px;
  }
`;

export const ProfilePostItem = styled("li")`
  width: 100%;
  max-width: 178px;
  aspect-ratio: 1;
`;

export const ProfileShortsItem = styled("li")`
  width: 100%;
  max-width: 178px;
  aspect-ratio: 0.5;
`;

export const ProfilePostLink = styled("a")`
  position: relative;
`;

export const ProfilePostImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: ${borders.smallBorderRadius};
  transition: ${transitions.fastTransition};

  ${opacityHoverActive}
`;

export const ProfileGarageList = styled("ul")`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const ProfileGarageItem = styled("li")`
  width: 100%;

  &:not(:last-child) {
    border-bottom: ${borders.defaultBorder};
  }
`;

export const ProfileGarageLink = styled("a")`
  width: 100%;
  padding: 15px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;
  border-radius: ${borders.defaultBorderRadius};
  ${hoverActive}

  @media ${device.tablet} {
    padding: 10px 20px;
  }

  @media ${device.mobileL} {
    padding-inline: 5px 15px;
  }
`;

export const ProfileGarageContentWrapper = styled("div")`
  ${flexCenter}
  column-gap: 15px;
`;

export const ProfileGarageImage = styled("img")`
  ${square(70)}
  object-fit: cover;
  object-position: center;
  border-radius: ${borders.thinBorderRadius};
`;

export const ProfileGarageDescriptionWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  column-gap: 5px;
  text-align: left;

  ${clampWidth(160, 400)}
`;

export const ProfileGarageTitle = styled("h3")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.blackTotal};

  & span {
    color: ${colors.grayAccent};

    @media ${device.mobileL} {
      display: none;
    }
  }

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProfileGarageDescription = styled("p")`
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  color: ${colors.grayAccent};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProfileGarageStatus = styled("p")<{ color: string }>`
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.medium};
  color: ${(props) => (props.color === "red" ? colors.red : colors.green)};
`;

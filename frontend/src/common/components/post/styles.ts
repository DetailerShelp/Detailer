import { clampText, styledWrapper } from "@/common/styles/mixins";
import { colors, device, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const PostWrapper = styled("div")`
  ${styledWrapper}

  width: 100%;
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

export const PostTopBarWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
  padding: 15px 25px 0px;

  @media ${device.tablet} {
    padding: 10px 20px 0px;
  }

  @media ${device.mobileM} {
    padding: 5px 10px 0px;
  }
`;

export const PostMenuWrapper = styled("div")`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

export const PostMenuSubsribeWrapper = styled("div")`
  @media ${device.mobileL} {
    display: none;
  }
`;

export const PostPublication = styled("img")`
  width: 100%;
  aspect-ratio: 1;

  object-fit: cover;
  object-position: center;
`;

export const PostBottomWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
  padding-inline: 25px;

  @media ${device.tablet} {
    padding-inline: 20px;
  }

  @media ${device.mobileM} {
    padding-inline: 10px;
  }
`;

export const PostBottomList = styled("ul")`
  display: flex;
  align-items: center;
  column-gap: 30px;

  @media ${device.tablet} {
    column-gap: 25px;
  }

  @media ${device.mobileM} {
    column-gap: 20px;
  }
`;

export const PostBottomItem = styled("li")`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const PostDescription = styled("p")`
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  padding-inline: 25px;

  @media ${device.tablet} {
    padding-inline: 20px;
  }

  @media ${device.mobileM} {
    padding-inline: 10px;
  }
`;

export const PostTime = styled("time")`
  ${clampText(fonts.sizes.dropdownMobile, fonts.sizes.dropdown)}
  color: ${colors.grayAccent};
  text-align: start;
  padding: 0px 25px 25px;

  @media ${device.tablet} {
    padding: 0px 20px 15px;
  }

  @media ${device.mobileM} {
    padding: 0px 10px 10px;
  }
`;

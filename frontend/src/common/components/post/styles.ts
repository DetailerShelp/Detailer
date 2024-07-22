import { clampText, square, styledWrapper } from "@/common/styles/mixins";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const PostWrapper = styled("div")`
  ${styledWrapper}

  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PostTopBarWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
  padding: 15px 25px;

  @media ${device.tablet} {
    padding: 10px 20px;
  }

  @media ${device.mobileM} {
    padding: 5px 10px;
  }
`;

export const PostUserWrapper = styled("div")`
  display: flex;
  align-items: center;
  column-gap: 20px;

  @media ${device.tablet} {
    column-gap: 15px;
  }

  @media ${device.mobileM} {
    column-gap: 10px;
  }
`;

export const PostUserAvatar = styled("img")`
  ${square(40)}
  border-radius: ${borders.circleBorderRadius};

  @media ${device.mobileM} {
    ${square(35)}
  }
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

export const PostMenuSubsribeWrapper = styled("div")`
  @media ${device.mobileL} {
    display: none;
  }
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

  @media ${device.tablet} {
    padding: 10px 20px;
  }

  @media ${device.mobileM} {
    padding: 5px 10px;
  }
`;

export const PostBotomList = styled("ul")`
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
  padding-inline: 25px;
  font-size: 15px;

  @media ${device.tablet} {
    padding-inline: 20px;
  }

  @media ${device.mobileM} {
    padding-inline: 10px;
  }
`;

export const PostTime = styled("time")`
  font-size: 12px;
  color: ${colors.grayAccent};
  text-align: start;
  padding: 10px 25px 25px;

  @media ${device.tablet} {
    padding: 10px 20px 15px;
  }

  @media ${device.mobileM} {
    padding: 5px 10px 10px;
  }
`;

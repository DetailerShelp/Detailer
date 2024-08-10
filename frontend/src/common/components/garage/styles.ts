import { clampText, flexCenter } from "@/common/styles/mixins";
import { colors, device, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";
import {
  PostBottomList,
  PostBottomItem,
  PostBottomWrapper,
  PostMenuSubsribeWrapper,
  PostMenuWrapper,
  PostPublication,
  PostTime,
  PostTopBarWrapper,
  PostWrapper,
} from "@/common/components/post/styles";

export const GarageWrapper = styled(PostWrapper)``;

export const GarageTopBarWrapper = styled(PostTopBarWrapper)``;

export const GarageMenuWrapper = styled(PostMenuWrapper)`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

export const GarageMenuSubsribeWrapper = styled(PostMenuSubsribeWrapper)`
  @media ${device.mobileL} {
    display: none;
  }
`;

export const GaragePublication = styled(PostPublication)``;

export const GarageBottomWrapper = styled(PostBottomWrapper)``;

export const GarageBottomList = styled(PostBottomList)``;

export const GarageBottomItem = styled(PostBottomItem)``;

export const GarageContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-inline: 25px;

  @media ${device.tablet} {
    padding-inline: 20px;
  }

  @media ${device.mobileM} {
    padding-inline: 10px;
  }
`;

export const GarageCharcteristicTitle = styled("h3")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
`;

export const GarageCharcteristicList = styled("ul")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  align-self: start;
  column-gap: 75px;
  row-gap: 10px;
`;

export const GarageCharcteristicItem = styled("li")`
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 10px;
`;

export const GarageCharcteristicAboutWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const GarageCharcteristicSubtitle = styled("h4")`
  ${clampText(fonts.sizes.extraSmallMobile, fonts.sizes.extraSmall)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.grayAccent};
  user-select: none;
`;

export const GarageCharcteristicDescription = styled("p")`
  ${clampText(fonts.sizes.dropdownMobile, fonts.sizes.dropdown)}
`;

export const GarageDescription = styled("p")`
  padding-inline: 0px;
`;

export const GarageMarkWrapper = styled("div")`
  display: flex;
  align-items: center;
  row-gap: 10px;
`;

export const GarageMarkSubtitle = styled("h4")`
  display: flex;
  align-items: center;
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.medium};
  white-space: nowrap;
  user-select: none;
`;

export const GarageMarkList = styled("ul")`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const GarageMarkItem = styled("li")<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 10px;

  svg * {
    color: ${(props) => (props.color === "green" ? colors.green : colors.red)};
  }
`;

export const GarageButtonWrapper = styled("div")`
  width: 100%;
  ${flexCenter}
  padding: 10px 25px 25px;

  @media ${device.tablet} {
    padding: 10px 20px 15px;
  }

  @media ${device.mobileM} {
    padding: 5px 10px 10px;
  }
`;

export const GarageTime = styled(PostTime)`
  padding: 0 25px;

  @media ${device.tablet} {
    padding-inline: 20px;
  }

  @media ${device.mobileM} {
    padding-inline: 10px;
  }
`;

import {
  clampHeight,
  clampText,
  flexCenter,
  square,
} from "@/common/styles/mixins";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const ModalProfileWrapper = styled("div")`
  width: 100%;
  ${flexCenter}
  flex-direction: column;
  row-gap: 10px;
`;

export const ModalProfileBackgroundWrapper = styled("div")`
  position: relative;
  width: 100%;
  ${clampHeight(200, 250)}
  border-radius: ${borders.defaultBorderRadius};
`;

export const ModalProfileUserAvatarWrapper = styled("div")`
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50%;
  z-index: 5;
  ${square(125)}
  border: ${borders.avatarBorder};
  border-radius: ${borders.circleBorderRadius};
  border-color: ${colors.whiteModal};

  @media ${device.mobile} {
    ${square(100)}
  }
`;

export const ModalProfileUserList = styled("ul")`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  @media ${device.mobileM} {
    row-gap: 10px;
  }
`;

export const ModalProfileUserItem = styled("li")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 50px;

  @media ${device.mobileM} {
    flex-direction: column;
    row-gap: 5px;
  }
`;

export const ModalProfileUserTitle = styled("h3")`
  font-weight: ${fonts.weights.medium};
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
  user-select: none;
`;

export const ModalProfileUserDescription = styled("p")`
  color: ${colors.grayAccent};
  font-weight: ${fonts.weights.regular};
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)};
`;

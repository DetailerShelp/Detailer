import { clampHeight, flexCenter, square } from "@/common/styles/mixins";
import { borders, device } from "@/common/styles/styleConstants";
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

  @media ${device.mobile} {
    ${square(100)}
  }
`;
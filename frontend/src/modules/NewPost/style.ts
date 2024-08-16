import {
  clampText,
  clampWidth,
  flexCenter,
  scrollBar,
} from "@/common/styles/mixins";
import { device, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const ModalPostWrapper = styled("div")`
  ${clampWidth(500, 700)}
  max-height: 90vh;
  padding: 35px;
  overflow-y: hidden;

  @media ${device.tablet} {
    padding: 30px;
  }
`;

export const ModalPostContent = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 25px;
  overflow-x: hidden;

  @media ${device.desktop} {
    gap: 20px;
  }

  @media ${device.mobile} {
    gap: 15px;
  }
`;

export const ModalPostHeader = styled("h2")`
  text-align: center;
  ${clampText(fonts.sizes.titleMobile, fonts.sizes.titleModal)};
  font-weight: ${fonts.weights.medium};
`;

export const ButtonsWrapper = styled("div")`
  ${flexCenter}
  width: 100%;
  column-gap: 20px;

  @media ${device.mobile} {
    column-gap: 15px;
  }
`;

export const ContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-inline: 40px;
  max-height: 65vh;
  overflow-y: auto;

  @media ${device.desktop} {
    gap: 20px;
    padding-inline: 30px;
  }

  @media ${device.tablet} {
    gap: 15px;
    padding-inline: 20px;
    max-height: 60vh;
  }

  ${scrollBar}
`;

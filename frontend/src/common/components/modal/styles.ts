import {
  clampText,
  clampWidth,
  flexCenter,
  scrollBar,
} from "@/common/styles/mixins";
import { device, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const ModalWrapper = styled("div")`
  ${clampWidth(450, 700)}
  height: 100%;
  max-height: 90vh;
  padding: 35px;

  @media ${device.tablet} {
    padding: 30px;
  }

  @media ${device.mobile} {
    padding: 25px;
  }

  @media ${device.mobileL} {
    width: 90vw;
    padding: 15px;
  }

  @media ${device.mobileM} {
    width: 95vw;
    padding: 10px;
  }
`;

export const ModalContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  overflow-x: hidden;

  @media ${device.desktop} {
    row-gap: 20px;
  }

  @media ${device.mobile} {
    row-gap: 15px;
  }

  @media ${device.mobileM} {
    row-gap: 10px;
  }
`;

export const ModalHeader = styled("h2")`
  text-align: center;
  ${clampText(fonts.sizes.titleMobile, fonts.sizes.titleModal)};
  font-weight: ${fonts.weights.medium};
`;

export const ModalButtonsWrapper = styled("div")`
  ${flexCenter}
  width: 100%;
  column-gap: 20px;

  @media ${device.mobile} {
    column-gap: 15px;
  }

  @media ${device.mobileM} {
    flex-direction: column-reverse;
    row-gap: 10px;
  }
`;

export const ModalSearchWrapper = styled("div")`
  margin-inline: auto;  
  ${clampWidth(300, 400)}
`;

export const ModalScrollContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-inline: 40px;
  max-height: 60vh;
  overflow-y: auto;

  @media ${device.desktop} {
    gap: 20px;
    padding-inline: 30px;
  }

  @media ${device.tablet} {
    gap: 15px;
    padding-inline: 20px;
    max-height: 55vh;
  }

  ${scrollBar}
`;

export const ModalProfileList = styled("ul")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media ${device.mobile} {
    gap: 20px;
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.mobileM} {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

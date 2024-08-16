import { clampText, flexCenter } from "@/common/styles/mixins";
import { colors, device, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";


export const ErrorPageWrapper = styled("div")`
  width: 100vw;
  height: 100vh;
  ${flexCenter}
  flex-direction: column;
  row-gap: 25px;
  color: ${colors.blackTotal};
  padding-inline: 15px;

  @media ${device.mobile} {
    row-gap: 20px;
  }

  @media ${device.mobileL} {
    row-gap: 15px;
  }

  @media ${device.mobileM} {
    row-gap: 10px;
    padding-inline: 10px;
  }
`;

export const ErrorPageTextWrapper = styled("div")`
  ${flexCenter}
  user-select: none;
`;

export const ErrorPageDescription = styled("p")`
  ${clampText(fonts.sizes.titleMobile, fonts.sizes.titleModal)}
  font-weight: ${fonts.weights.medium};
  text-transform: uppercase;
  text-align: center;
`;

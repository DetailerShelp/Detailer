import { styledWrapper } from "@/common/styles/mixins";
import { borders, device } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const LikedSavedWrapper = styled("div")`
  ${styledWrapper}
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  border-bottom-left-radius: ${borders.mediaBorderRadius};
  border-bottom-right-radius: ${borders.mediaBorderRadius};

  @media ${device.mobile} {
    row-gap: 10px;
  }
`;

export const LikedSavedSearchWrapper = styled("div")`
  width: 100%;
  padding-inline: 35px;

  @media ${device.mobileL} {
    padding-inline: 25px;
  }

  @media ${device.mobileM} {
    padding-inline: 15px;
  }
`;

export const LikedSavedContentWrapper = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    width: clamp(308px, 91.33vw, 548px); 
  }
`;

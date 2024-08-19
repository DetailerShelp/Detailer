import { flexCenter, loadingGradient } from "@/common/styles/mixins";
import { borders, colors, device } from "@/common/styles/styleConstants";
import { ProfilePostItem } from "@/modules/user/profile/components/publication/render/styles";
import styled from "styled-components";

export const LoadingCircle = styled("div")<{ $size: number }>`
  width: ${(props) => props.$size}px;
  aspect-ratio: 1;
  border-radius: ${borders.circleBorderRadius};
  ${loadingGradient}
`;

export const LoadingPublication = styled("div")`
  width: 100%;
  aspect-ratio: 1;
  ${loadingGradient}
`;

export const LoadingTitle = styled("p")`
  width: 150px;
  height: 22px;
  border-radius: ${borders.defaultBorderRadius};
  ${loadingGradient}

  @media ${device.mobileM} {
    width: 100px;
    height: 18px;
  }
`;

export const LoadingSubtitle = styled(LoadingTitle)`
  width: 100px;
  height: 20px;

  @media ${device.mobileM} {
    width: 75px;
    height: 15px;
  }
`;

export const LoadingDescription = styled("p")`
  width: 100%;
  height: 18px;
  border-radius: ${borders.mediaBorderRadius};
  ${loadingGradient}

  @media ${device.mobileM} {
    height: 12px;
  }
`;

export const LoadingTime = styled("time")`
  width: 100px;
  height: 15px;
  border-radius: ${borders.mediaBorderRadius};
  ${loadingGradient}

  margin: 0 25px;

  @media ${device.tablet} {
    margin-inline: 20px;
  }

  @media ${device.mobileM} {
    width: 60px;
    height: 10px;
    margin-inline: 10px;
  }
`;

export const LoadingWhiteBlackButton = styled("div")<{ $size: number }>`
  height: ${(props) => props.$size}px;
  width: calc(${(props) => props.$size}px * 6);
  border-radius: ${borders.bigBorderRadius};

  @media ${device.mobile} {
    height: calc(${(props) => props.$size}px / 1.2);
    width: calc(${(props) => props.$size}px * 4);
  }

  ${loadingGradient}
`;

export const LoadingNavigationItem = styled("li")`
  width: 100%;
  height: 50px;
  padding-block: 10px;
  border-top-left-radius: ${borders.defaultBorderRadius};
  border-top-right-radius: ${borders.defaultBorderRadius};

  ${flexCenter}
  column-gap: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 2px;
    background-color: ${colors.grayBorder};
  }
`;

export const LoadingNavigationButton = styled("div")`
  width: 50%;
  height: 18px;
  ${loadingGradient};
  border-radius: ${borders.mediaBorderRadius};

  @media ${device.mobileM} {
    display: none;
  }
`;

export const LoadingPostItem = styled(ProfilePostItem)`
  margin-top: 1px;
  ${loadingGradient}
  border-radius: ${borders.smallBorderRadius};
`;

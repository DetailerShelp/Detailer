import {
  absCenter,
  absVertically,
  buttonHoverActive,
  flexCenter,
} from "@/common/styles/mixins";
import { borders, transitions } from "@/common/styles/styleConstants";
import styled from "styled-components";

const disk = "/images/brake-disk.svg";
const diskHover = "/images/brake-disk-hover.svg";
const support = "/images/brake-support.svg";

const Wrapper = styled("div")<{ $size: number }>`
  ${flexCenter}
  width: ${(props) => (props.$size ? `${props.$size}px` : "100px")};
  aspect-ratio: 1;
  position: relative;
  transition: ${transitions.fastTransition};
  border-radius: ${borders.circleBorderRadius};

  ${buttonHoverActive}
`;

const DiskImg = styled("img")`
  ${absCenter}
  width: 75%;
  aspect-ratio: 1;
  z-index: 1;


  animation: 7s linear 0s normal none infinite running disk;
  -webkit-animation: 7s linear 0s normal none infinite running disk;

  @keyframes disk {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes disk {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const DiskImgHover = styled(DiskImg)`
  z-index: 2;
  opacity: 0;
  transition: ${transitions.lowTransition};

  &:hover,
  &:active {
    opacity: 1;
  }
`;

const SupportImg = styled("img")`
  ${absVertically}
  left: 7%;
  height: 75%;
  z-index: 3;
`;

interface ErrorBrakeDiskProps {
  size: number;
}

export const ErrorBrakeDisk = ({ size }: ErrorBrakeDiskProps) => {
  return (
    <Wrapper $size={size}>
      <DiskImg src={disk} />
      <DiskImgHover src={diskHover} />
      <SupportImg src={support} />
    </Wrapper>
  );
};

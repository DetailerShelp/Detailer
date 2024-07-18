
import styled from "styled-components";
import { absCenter, flexCenter, square } from '@/common/styles/mixins';
import { borders, colors, device } from '@/common/styles/styleConstants';
import { DefaultButton } from "../../ui/Button";

export const MediaWrapper = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  animation: shows .5s;

  @keyframes shows {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

export const StyledVideoWrapper = styled('div')`
  height: 100%;
  width: 100%;
  ${flexCenter}
  border-radius: 10px;
  overflow: hidden;
`;

export const MediaDeleteWrapper = styled('div')`
  ${flexCenter}
  position: absolute;
  top: 7px;
  right: 7px;
  background-color: ${colors.grayBackground};
  border-radius: 50%;

  @media ${device.mobile} {
    top: 4px;
    right: 4px;
  }
`;

export const MediaVideoWrapper = styled('video')`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const PlayWrapper = styled(DefaultButton)`
    ${absCenter}
    background-color: ${colors.grayBackground};
    border-radius: ${borders.bigBorderRadius};
    color: black;
    ${square(40)}

    @media ${device.desktop}{
        ${square(30)}
    }

    @media ${device.tablet} {
        ${square(27)}
    }

    @media ${device.mobile} {
        ${square(20)}
    }
    z-index: 10;
`


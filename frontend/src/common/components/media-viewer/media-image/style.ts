import { flexCenter } from '@/common/styles/mixins';
import { colors, device } from '@/common/styles/styleConstants';
import styled from 'styled-components'

export const MediaImageWrapper = styled('div')`
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

export const StyledImageWrapper = styled('div')`
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

export const StyledImage = styled('img')`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

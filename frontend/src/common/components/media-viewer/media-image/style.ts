import { colors } from '@/common/styles/styleConstants';
import styled from 'styled-components'

export const MediaImageWrapper = styled('div')`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
`;
export const StyledImageWrapper = styled('div')`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MediaDeleteWrapper = styled('div')`
  position: absolute;
  top: 7px;
  right: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.grayBackground};
  border-radius: 50%;
`;

export const StyledImage = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

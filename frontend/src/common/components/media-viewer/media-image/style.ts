import { flexCenter } from '@/common/styles/mixins';
import { colors } from '@/common/styles/styleConstants';
import styled from 'styled-components'

export const MediaImageWrapper = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
`;

export const StyledImage = styled('img')`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

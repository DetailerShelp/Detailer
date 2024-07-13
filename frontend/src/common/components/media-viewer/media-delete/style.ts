import { colors } from '@/common/styles/styleConstants';
import styled from 'styled-components';

export const MediaFileDeleteButton = styled('div')`
  width: 25px;
  height: 25px;
  color: ${colors.red};
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
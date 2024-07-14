import { flexCenter, square } from '@/common/styles/mixins';
import { colors } from '@/common/styles/styleConstants';
import styled from 'styled-components';
import { DefaultButton } from '@/common/components/ui/Button';

export const MediaFileDeleteButton = styled(DefaultButton)`
  ${square(25)}
  ${flexCenter}
  color: ${colors.red};
  pointer-events: auto;
`;
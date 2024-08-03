import { flexCenter, square } from '@/common/styles/mixins';
import { colors, device } from '@/common/styles/styleConstants';
import styled from 'styled-components';
import { DefaultButton } from '@/common/components/ui/Button';

export const MediaFileDeleteButton = styled(DefaultButton)`
  ${square(25)}
  ${flexCenter}
  color: ${colors.red};
  pointer-events: auto;
  z-index: 2;

  @media ${device.desktop} {
    ${square(20)}
  }

  @media ${device.tablet} {
    ${square(17)}
  }

  @media ${device.mobile} {
    ${square(15)}
  }
`;
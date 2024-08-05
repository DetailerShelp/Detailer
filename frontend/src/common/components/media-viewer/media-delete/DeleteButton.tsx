import { SvgHelper } from '@/common/svg-helper/SvgHelper';
import { MediaFileDeleteButton } from '@/common/components/media-viewer/media-delete/style';
import { FC } from 'react';
import styled from 'styled-components';
import { device } from '@/common/styles/styleConstants';

const TrashIcon = styled(SvgHelper)`
  height: 16px;

  @media ${device.desktop} {
    height: 14px;
  }

  @media ${device.tablet} {
    height: 12px;
  }

  @media ${device.mobile} {
    height: 10px;
  }
`
interface DeleteButtonProps {
  onDelete?: () => void;
}

export const DeleteButton: FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <MediaFileDeleteButton onClick={onDelete}>
      <TrashIcon iconName='trash' />
    </MediaFileDeleteButton>
  );
};
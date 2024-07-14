import { SvgHelper } from '@/common/svg-helper/SvgHelper';
import { MediaFileDeleteButton } from '@/common/components/media-viewer/media-delete/style';
import { FC } from 'react';

interface DeleteButtonProps {
  onDelete?: () => void;
}

export const DeleteButton: FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <MediaFileDeleteButton onClick={onDelete}>
      <SvgHelper iconName='trash' width='16px' height='16px' />
    </MediaFileDeleteButton>
  );
};
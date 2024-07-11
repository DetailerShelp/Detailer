import {
    StyledImageWrapper,
    StyledImage,
    MediaImageWrapper,
    MediaDeleteWrapper,
} from '@/common/components/media-viewer/media-image/style';
import { FC, useMemo } from 'react';
import { DeleteButton } from '@/common/components/media-viewer/media-delete/DeleteButton';
//   import { AnimationWrapper } from '@/common/components/selected-media-viewer/components/styles';

export interface MediaImageUploadProps {
    url: string;
    id: string | number;
    onDelete?: (index: string | number) => void;
}

export const MediaImageUpload: FC<MediaImageUploadProps> = ({ onDelete, id, url }) => {
    const imageUrl: string = useMemo(() => {
        return url;
    }, [url]);

    const handleDelete = () => {
        onDelete?.(id)
    };

    return (
        <MediaImageWrapper>
            <MediaDeleteWrapper>
                <DeleteButton onDelete={handleDelete} />
            </MediaDeleteWrapper>
            <StyledImageWrapper>
                <StyledImage src={imageUrl}></StyledImage>
            </StyledImageWrapper>
        </MediaImageWrapper>
    );
};

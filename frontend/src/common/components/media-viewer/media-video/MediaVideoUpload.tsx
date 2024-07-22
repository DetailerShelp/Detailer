import { useMemo } from "react";
import { DeleteButton } from "@/common/components/media-viewer/media-delete/DeleteButton";
import { 
    MediaDeleteWrapper, 
    MediaVideoWrapper, 
    MediaWrapper, 
    StyledVideoWrapper,
    PlayWrapper
} from "@/common/components/media-viewer/media-video/style";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import styled from "styled-components";
import { absCenter } from "@/common/styles/mixins";
import { device } from "@/common/styles/styleConstants";

const PlayButton = styled(SvgHelper)`
    ${absCenter}

    @media ${device.desktop}{
        height: 20px;
    }

    @media ${device.tablet} {
        height: 17px;
    }

    @media ${device.mobile} {
        height: 13px;
    }
`

export interface MediaVideoUploadProps {
    url: string;
    id: string | number;
    onDelete?: (index: string | number) => void;
}

const MediaVideoUpload = ({ url, id, onDelete }: MediaVideoUploadProps) => {
    const videoUrl: string = useMemo(() => {
        return url;
    }, [url]);

    const handleDelete = () => {
        onDelete?.(id)
    };

    return (
        <MediaWrapper>
            <PlayWrapper>
                <PlayButton iconName="shorts"/>
            </PlayWrapper>
            <MediaDeleteWrapper>
                <DeleteButton onDelete={handleDelete} />
            </MediaDeleteWrapper>
            <StyledVideoWrapper>
                <MediaVideoWrapper src={videoUrl}></MediaVideoWrapper>
            </StyledVideoWrapper>
        </MediaWrapper>
    )
};

export default MediaVideoUpload;
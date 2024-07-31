import SvgHelper from "@/common/svg-helper/SvgHelper";
import { 
    FileIcon, 
    FileInfo, 
    FileWrapper, 
    HeaderMedia, 
    TextWrapper, 
    TextWrapperSize, 
    UploadImage, 
    UploadVideo 
} from "@/modules/user/messenger/components/render/style";
import styled from "styled-components";

interface RenderMediaProps {
    withTitle: boolean;
    media: File | undefined;
}

const IconLoader = styled(SvgHelper)`
    color: inherit;
    height: 25px;
    width: 25px;
`

const RenderMedia = ({ media, withTitle }: RenderMediaProps) => {
    if (!media) return null;
    return (
        <>
            {(() => {
                switch (media.type.split('/')[0]) {
                    case 'image':
                        return (
                            <>
                                {withTitle && <HeaderMedia>
                                    Отправить изображение
                                </HeaderMedia>}

                                <UploadImage
                                    src={URL.createObjectURL(media)}
                                    alt="Uploaded"
                                />
                            </>
                        );

                    case 'video':
                        return (
                            <>
                                {withTitle && <HeaderMedia>
                                    Отправить видеофайл
                                </HeaderMedia>}

                                <UploadVideo
                                    src={URL.createObjectURL(media)}
                                    controls
                                />
                            </>
                        );

                    case 'application':
                        return (
                            <>
                                {withTitle && <HeaderMedia>
                                    Отправить файл
                                </HeaderMedia>}
                                <FileWrapper style={{padding: withTitle ? '0px': '10px 10px 0px'}}>
                                    <FileIcon href={URL.createObjectURL(media)} download={media.name}>
                                        <IconLoader iconName="fileLoader" />
                                    </FileIcon>

                                    <FileInfo>
                                        <TextWrapper>
                                            {media.name}
                                        </TextWrapper>
                                        <TextWrapperSize >
                                            {(media.size / (1024)).toFixed(1)}КБ
                                        </TextWrapperSize>
                                    </FileInfo>
                                </FileWrapper>
                            </>
                        );

                    default:
                        return null; // В случае неподдерживаемого формата
                }
            })()}
        </>
    )
};

export default RenderMedia;
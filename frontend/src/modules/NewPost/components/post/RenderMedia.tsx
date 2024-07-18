import { MediaImageUpload } from "@/common/components/media-viewer/media-image/MediaimageUpload";
import { MediaBlockWrapper } from "./style";
import MediaVideoUpload from "@/common/components/media-viewer/media-video/MediaVideoUpload";

interface RenderMediaProps {
    MediaFiles: File[];
    deleteMedia: (id: number | string) => void;
}

const RenderMedia = ({ MediaFiles, deleteMedia }: RenderMediaProps) => {
    return (
        <>
            {MediaFiles.map((file, index) => (
                <MediaBlockWrapper>
                    {file.type.split('/')[0] === 'image' ?
                        <MediaImageUpload
                            key={index}
                            id={index}
                            url={URL.createObjectURL(file)}
                            onDelete={(id) => deleteMedia(id)}
                        />
                        : <MediaVideoUpload 
                            key={index} 
                            id={index} 
                            url={URL.createObjectURL(file)} 
                            onDelete={(id) => deleteMedia(id)}
                        />
                    }
                </MediaBlockWrapper>
            ))}
        </>
    )
};

export default RenderMedia;
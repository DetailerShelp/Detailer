import { useState } from "react"
import DragAndDropUpload from "@/common/components/DraggerUploadFile";
import { MediaImageUpload } from "@/common/components/media-viewer/media-image/MediaimageUpload";
import { 
    DescriptionBlock, 
    DescriptionTextArea, 
    MediaBlockWrapper, 
    PostContent, 
    PostMediaContent 
} from "@/modules/NewPost/components/post/style";
import TextArea from "@/common/components/ui/TextArea";
import Loader from "@/modules/NewPost/components/Loader";

const Post = () => {
    const [files, setFiles] = useState<File[]>([]);

    const handleChangeFiles = (file: File) => {
        setFiles(currentFiles => currentFiles.length < 10 ? [...currentFiles, file] : currentFiles);
    }

    const deleteMedia = (id: number | string) => {
        const tmp = files;
        tmp.splice(Number(id), 1);
        setFiles([...tmp]);
    }

    return (
        <>
            <PostContent>
                <DescriptionBlock>
                    Фото/Видео
                </DescriptionBlock>

                <PostMediaContent>
                    {files.map((file, index) => (
                        <MediaBlockWrapper>
                            <MediaImageUpload
                                key={index}
                                id={index}
                                url={URL.createObjectURL(file)}
                                onDelete={(id) => deleteMedia(id)}
                            />
                        </MediaBlockWrapper>
                    ))}

                    {files.length < 10 && <DragAndDropUpload onFile={handleChangeFiles} multiple={true}>
                        <MediaBlockWrapper>
                            <Loader sizeIcon={56} />
                        </MediaBlockWrapper>
                    </DragAndDropUpload>}
                </PostMediaContent>
            </PostContent>

            <PostContent>
                <DescriptionBlock>
                    Описание
                </DescriptionBlock>
                <DescriptionTextArea>
                    <TextArea
                        textAreaPlaceholder='Добавить описание...'
                        wrapperStyle={{ width: '100%', height: '100%' }}
                    />
                </DescriptionTextArea>
            </PostContent>
        </>
    )
}

export default Post
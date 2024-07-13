import { useState } from "react"
import DragAndDropUpload from "@/common/components/DraggerUploadFile";
import { MediaImageUpload } from "@/common/components/media-viewer/media-image/MediaimageUpload";
import { DescriptionBlock, PostContent, PostMediaContent } from "./style";
import TextArea from "@/common/components/ui/TextArea";

const Post = () => {
    const [files, setFiles] = useState<File[]>([]);

    const handleChangeFiles = (file: File) => {
        setFiles(currentFiles => [...currentFiles, file]);
    }
    return (
        <>
            <PostContent>
                <DescriptionBlock>
                    Фото/Видео
                </DescriptionBlock>
                <PostMediaContent>
                    {files.map((file, index) => (
                        <MediaImageUpload id={index} url={URL.createObjectURL(file)}></MediaImageUpload>
                    ))}
                    <DragAndDropUpload onFile={handleChangeFiles} multiple={true}>
                        <div style={{ height: '100px', width: '100px', border: '1px solid black', cursor: 'pointer' }}>Добавить элемент</div>
                    </DragAndDropUpload>
                </PostMediaContent>
            </PostContent>
            <PostContent>
                <DescriptionBlock>
                    Описание
                </DescriptionBlock>
                <TextArea
                    textAreaPlaceholder='Добавить описание...'
                    wrapperStyle={{ width: '548px', height: '215px' }}
                />
            </PostContent>
        </>
    )
}

export default Post
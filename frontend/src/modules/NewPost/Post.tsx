import { useState } from "react"
import DragAndDropUpload from "@/common/components/DraggerUploadFile";
import { MediaImageUpload } from "@/common/components/media-viewer/media-image/MediaimageUpload";
import { DescriptionBlock, PostContent, PostMediaContent } from "./style";
import TextArea from "@/common/components/ui/TextArea";
import Loader from "./Loader";

const Post = () => {
    const [files, setFiles] = useState<File[]>([]);

    //норм вот так?  или как то по другому ограничить количество загружаемых файлов?
    const handleChangeFiles = (file: File) => {
        setFiles(currentFiles => currentFiles.length < 10 ? [...currentFiles, file]:[...currentFiles]);
        console.log(files.length)
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
                        <MediaImageUpload 
                            key={index}
                            id={index} 
                            url={URL.createObjectURL(file)}
                            onDelete={(id)=>deleteMedia(id)}
                        />
                    ))}
                    {files.length < 10 && <DragAndDropUpload onFile={handleChangeFiles} multiple={true}>
                        <Loader />
                    </DragAndDropUpload>}
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
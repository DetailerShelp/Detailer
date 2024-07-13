import { useState } from "react"
import DragAndDropUpload from "@/common/components/DraggerUploadFile";
import { MediaImageUpload } from "@/common/components/media-viewer/media-image/MediaimageUpload";
import { PostMediaContent } from "./style";

const Post = () => {
    const [files, setFiles] = useState<File[]>([]);

    const handleChangeFiles = (file: File) => {
        setFiles(currentFiles => [...currentFiles, file]);
    }
    return <>
        <PostMediaContent>
            {files.map((file, index) => (
                <MediaImageUpload id={index} url={URL.createObjectURL(file)}></MediaImageUpload>
            ))}
            <DragAndDropUpload onFile={handleChangeFiles} multiple={true}>
                <div style={{ height: '100px', width: '100px', border: '1px solid black', cursor: 'pointer' }}>Добавить элемент</div>
            </DragAndDropUpload>
        </PostMediaContent>
    </>
}

export default Post
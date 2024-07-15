import { useState } from "react";
import { DescriptionBlock, DiscriptionWrapper, ShortsWrapper, VideoPosition, VideoWrapper } from "./style";
import Loader from "../Loader";
import TextArea from "@/common/components/ui/TextArea";
import DragAndDropUpload from "@/common/components/DraggerUploadFile";

const ShotrsUpload = () => {
    const [videoFile, setVideoFile] = useState<File>();

    const changeVideo = (file: File) => {
        setVideoFile(file);
    };

    return (
        <>
            <ShortsWrapper>
                <VideoWrapper>
                    <DescriptionBlock>
                        Шортс
                    </DescriptionBlock>
                    <VideoPosition>
                        {!videoFile ? <DragAndDropUpload onFile={changeVideo} multiple={false} accept="video/mp4">
                            <Loader
                                styleWrapper={{ width: '240px', height: '490px', borderRadius: '20px' }}
                                sizeIcon={74}
                            />
                        </DragAndDropUpload>
                        : <p>{videoFile.name}</p>}
                    </VideoPosition>
                </VideoWrapper>
                <DiscriptionWrapper>
                    <DescriptionBlock>
                        Описание
                    </DescriptionBlock>
                    <TextArea
                        textAreaPlaceholder="Добавить описание..."
                        wrapperStyle={{ height: '100%' }}
                    />
                </DiscriptionWrapper>
            </ShortsWrapper>
        </>
    )
};

export default ShotrsUpload;
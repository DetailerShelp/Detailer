import { useState } from "react";
import {
    DescriptionBlock,
    DiscriptionTextArea,
    DiscriptionWrapper,
    ShortsWrapper,
    VideoPosition,
    VideoWrapper
} from "@/modules/NewPost/components/shorts/style";
import Loader from "@/modules/NewPost/components/Loader";
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
                    {!videoFile ? <DragAndDropUpload onFile={changeVideo} multiple={false} accept="video/mp4">
                        <VideoPosition>
                            <Loader
                                styleWrapper={{ borderRadius: '20px' }}
                                sizeIcon={74}
                            />
                        </VideoPosition>
                        </DragAndDropUpload>
                        :
                        <VideoPosition> 
                            
                        </VideoPosition>
                    }
                </VideoWrapper>
                <DiscriptionWrapper>
                    <DescriptionBlock>
                        Описание
                    </DescriptionBlock>
                    <DiscriptionTextArea>
                        <TextArea
                            textAreaPlaceholder="Добавить описание..."
                            wrapperStyle={{ height: '100%' }}
                        />
                    </DiscriptionTextArea>
                </DiscriptionWrapper>
            </ShortsWrapper>
        </>
    )
};

export default ShotrsUpload;
import { useState } from "react";
import {
    DescriptionBlock,
    DiscriptionTextArea,
    DiscriptionWrapper,
    ShortsWrapper,
    VideoPosition,
    VideoWrapper,
    VideoUploaded
} from "@/modules/NewPost/components/shorts/style";
import Loader from "@/modules/NewPost/components/Loader";
import TextArea from "@/common/components/ui/TextArea";
import DragAndDropUpload from "@/common/components/DraggerUploadFile";
import Short from "@/modules/user/shorts/components/Short";

interface CustomFile extends File {
    url: string;
}

const ShotrsUpload = () => {
    const [videoFile, setVideoFile] = useState<CustomFile>();

    const changeVideo = (file: File) => {
        const customFile: CustomFile = file as CustomFile;
        customFile.url = URL.createObjectURL(file);
        setVideoFile(customFile);
    };

    return (

        <ShortsWrapper>
            <VideoWrapper>
                <DescriptionBlock>
                    Шортс
                </DescriptionBlock>

                {!videoFile ?
                    <DragAndDropUpload onFile={changeVideo} multiple={false} accept="video/mp4">
                        <VideoPosition>
                            <Loader
                                styleWrapper={{ borderRadius: '20px' }}
                                sizeIcon={74}
                            />
                        </VideoPosition>
                    </DragAndDropUpload>
                    :
                    <VideoUploaded>
                        <Short id={1} video={videoFile.url} activeVideo={2} />
                    </VideoUploaded>
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
    )
};

export default ShotrsUpload;
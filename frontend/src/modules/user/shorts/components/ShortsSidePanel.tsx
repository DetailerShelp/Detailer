import { ShortsFunctionsWrapper, ShortsSidePanelWrapper } from '@/modules/user/shorts/styles';
import { ShortsButtonFunctions } from '@/common/styles/tags/button/ShortsButtonFunctions';
import { VideoLinksType } from '@/modules/user/shorts/videos';

interface ShortsSidePanelProps {
    video: VideoLinksType,
    setActiveVideo: (arg: any) => void
}

export default function ShortsSidePanel({video, setActiveVideo}: ShortsSidePanelProps) {
    const {likes, repost, comments} = video;
    return (
        <ShortsSidePanelWrapper>
            <ShortsFunctionsWrapper>
                <ShortsButtonFunctions title="нравится" icon="like" count={likes} />
                <ShortsButtonFunctions title="комментарии" icon="comment" count={comments} />
                <ShortsButtonFunctions title="поделиться" icon="share" count={repost} />
                <ShortsButtonFunctions title="избранное" icon="favourite" />
                <ShortsButtonFunctions title="поделиться" icon="more" />
            </ShortsFunctionsWrapper>
            <ShortsFunctionsWrapper>
                <ShortsButtonFunctions click={() => setActiveVideo((prev: any) => prev - 1)} title="предыдущее" icon="arrowLeft" />
                <ShortsButtonFunctions click={() => setActiveVideo((prev: any) => prev + 1)} title="следующее" icon="arrowRight" />
            </ShortsFunctionsWrapper>
        </ShortsSidePanelWrapper>
    )
}

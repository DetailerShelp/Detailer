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
                <ShortsButtonFunctions title="Нравится" icon="like" count={likes} />
                <ShortsButtonFunctions title="Комментарии" icon="comment" count={comments} />
                <ShortsButtonFunctions title="Поделиться" icon="share" count={repost} />
                <ShortsButtonFunctions title="Избранное" icon="saved" />
                <ShortsButtonFunctions title="Поделиться" icon="more" />
            </ShortsFunctionsWrapper>
            <ShortsFunctionsWrapper>
                <ShortsButtonFunctions click={() => setActiveVideo((prev: any) => prev - 1)} title="Предыдущее" icon="arrowLeft" />
                <ShortsButtonFunctions click={() => setActiveVideo((prev: any) => prev + 1)} title="Следующее" icon="arrowRight" />
            </ShortsFunctionsWrapper>
        </ShortsSidePanelWrapper>
    )
}

import { ShortsFunctionsWrapper, ShortsSidePanelWrapper } from '@/modules/user/shorts/styles';
import { ShortsButtonFunctions } from '@/common/styles/tags/button/ShortsButtonFunctions';
import { videoLinks, VideoLinksType } from '@/modules/user/shorts/videos';

interface ShortsSidePanelProps {
    video: VideoLinksType,
    activeVideo: number,
    setActiveVideo: (arg: number) => void
}

export default function ShortsSidePanel({video, activeVideo, setActiveVideo}: ShortsSidePanelProps) {
    const {likes, repost, comments} = video;

    const handleClick = (value: number) => {
        if (value < 0 || value > videoLinks.length - 1) {
            setActiveVideo(activeVideo);
        } else {
            setActiveVideo(value);
        }
    }

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
                <ShortsButtonFunctions click={() => handleClick(activeVideo - 1)} title="Предыдущее" icon="arrowUp" />
                <ShortsButtonFunctions click={() => handleClick(activeVideo + 1)} title="Следующее" icon="arrowDown" />
            </ShortsFunctionsWrapper>
        </ShortsSidePanelWrapper>
    )
}

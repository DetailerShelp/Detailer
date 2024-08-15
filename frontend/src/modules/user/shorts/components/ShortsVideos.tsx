import { ShortsVideosWrapper, ShortsWrapper } from "@/modules/user/shorts/styles";
import { useEffect, useRef, useState } from "react";
import Short from "@/modules/user/shorts/components/Short";
import { videoLinks } from "@/modules/user/shorts/videos";
import ShortsSidePanel from "@/modules/user/shorts/components/ShortsSidePanel";

const useWindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resizeHandler = () => setWidth(window.innerHeight);
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return width;
};

interface ShortsVideosProps {
    activeVideo: number
    setActiveVideo: (arg: number) => void
}

export default function ShortsVideos({ activeVideo, setActiveVideo }: ShortsVideosProps) {
    const windowWidth = useWindowSize();
    const shortsVideos = useRef<any>(null);
    const shortsWrapper = useRef<any>(null);
    const [startSwipe, setStartSwipe] = useState(0);

    const handleScroll = (top: number) => {
        shortsVideos.current.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        const scrollValue = activeVideo * shortsWrapper.current.clientHeight;
        handleScroll(scrollValue);
    }, [activeVideo, windowWidth]);

    const handleSwipeClick = () => {
        const endSwipe = shortsVideos.current.scrollTop;
        const signal = shortsWrapper.current.clientHeight / 3;
        if (endSwipe - startSwipe > shortsWrapper.current.clientHeight / 3) {
            setActiveVideo(activeVideo + 1);
        } else if (endSwipe - startSwipe < signal * -1) {
            setActiveVideo(activeVideo - 1);
        } else {
            handleScroll(activeVideo * shortsWrapper.current.clientHeight)
        }
    }

    return (
        <ShortsWrapper ref={shortsWrapper}>
            <ShortsVideosWrapper
                ref={shortsVideos}
                onTouchStart={() => setStartSwipe(shortsVideos.current.scrollTop)}
                onTouchEnd={handleSwipeClick}
            >
                {videoLinks.map((el, index) =>
                    <Short key={index} id={index} activeVideo={activeVideo} video={el.src} />)
                }
            </ShortsVideosWrapper>
            <ShortsSidePanel activeVideo={activeVideo} setActiveVideo={setActiveVideo} video={videoLinks[activeVideo]} />
        </ShortsWrapper>
    )
}

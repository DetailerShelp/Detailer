import { ShortsVideosWrapper, ShortsWrapper } from "@/modules/user/shorts/styles";
import { useEffect, useRef, useState } from "react";
import Short from "./Short";
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

    useEffect(() => {
        shortsVideos.current.scrollTo({
            top: activeVideo * shortsWrapper.current.clientHeight,
            behavior: 'smooth',
        });
    }, [activeVideo, windowWidth]);

    return (
        <ShortsWrapper ref={shortsWrapper}>
            <ShortsVideosWrapper ref={shortsVideos}>
                {videoLinks.map((el, index) => <Short key={index} id={index} activeVideo={activeVideo} video={el.src} />)}
            </ShortsVideosWrapper>
            <ShortsSidePanel setActiveVideo={setActiveVideo} video={videoLinks[activeVideo]} />
        </ShortsWrapper>
    )
}

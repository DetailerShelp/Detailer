import { useEffect, useRef, useState } from 'react';
import { ShortVideo, ShortVideoWrapper } from '@/modules/user/shorts/styles';
import ReactPlayer from 'react-player';
import PlayVideoButton from '@/common/styles/tags/button/PlayVideoButton';
import ShortVideoRange from '@/modules/user/shorts/components/ShortVideoRange';
import ShortVideoMixer from '@/modules/user/shorts/components/ShortVideoMixer';

interface ShortProps {
    id: number,
    video: string,
    activeVideo: number,
}

export default function Short({ id, video, activeVideo }: ShortProps) {
    const playerRef = useRef<any>(null);

    const [isPlaying, setIsPlaying] = useState(id === activeVideo);
    const [maxDuration, setMaxDuration] = useState(0);
    const [progressVideo, setProgressVideo] = useState(0);

    useEffect(() => {
        if (id === activeVideo) setIsPlaying(true)
        handleChangeTimeCode(0);
        setProgressVideo(0);
    }, [activeVideo]);

    const handleChangeTimeCode = (value: number) => {
        if (playerRef.current) playerRef.current.seekTo(value, 'seconds');
        setProgressVideo(Number(value));
    }

    const [soundValue, setSoundValue] = useState(100);
    const [isMixer, setIsMixer] = useState(false);

    return (
        <ShortVideoWrapper>
            <ShortVideo onClick={() => setIsPlaying(prev => !prev)}>
                <ReactPlayer
                    ref={playerRef}
                    onReady={(reactPlayer) => setMaxDuration(reactPlayer.getDuration())}
                    onProgress={(reactPlayer) => setProgressVideo(reactPlayer.playedSeconds)}
                    volume={soundValue / 100}
                    url={video}
                    loop={true}
                    width={'100%'}
                    height={'auto'}
                    playing={isPlaying}
                    controls={false}
                    muted={true}
                />
            </ShortVideo>

            {!isPlaying &&
                <PlayVideoButton />
            }

            <ShortVideoRange
                maxDuration={maxDuration}
                progressVideo={progressVideo}
                handleChangeTimeCode={handleChangeTimeCode}
            />

            <ShortVideoMixer isMixer={isMixer} setIsMixer={setIsMixer} soundValue={soundValue} setSoundValue={setSoundValue} />
        </ShortVideoWrapper>
    )
}

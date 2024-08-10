import { ShortVideoRangeCircle, ShortVideoRangeInput, ShortVideoRangeProgress, ShortVideoRangeWrapper } from '@/modules/user/shorts/styles'

interface ShortVideoRangeProps {
    handleChangeTimeCode: (arg: number) => void,
    maxDuration: number,
    progressVideo: number
}

export default function ShortVideoRange({ maxDuration, progressVideo, handleChangeTimeCode }: ShortVideoRangeProps) {
    return (
        <ShortVideoRangeWrapper>
            <ShortVideoRangeInput
                onChange={(e) => handleChangeTimeCode(Number(e.target.value))}
                type="range"
                id="range"
                min="0"
                max={maxDuration}
                value={progressVideo}
                name="range"
            />
            <ShortVideoRangeProgress style={{width: `${progressVideo / maxDuration * 100}%`}}></ShortVideoRangeProgress>
            <ShortVideoRangeCircle style={{left: `${progressVideo / maxDuration * 100}%`}}></ShortVideoRangeCircle>
        </ShortVideoRangeWrapper>
    )
}

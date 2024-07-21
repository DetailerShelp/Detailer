import { ShortVideoRangeContainer, ShortVideoRangeInput, ShortVideoRangeWrapper } from '@/modules/user/shorts/styles'

interface ShortVideoRangeProps {
    handleChangeTimeCode: (arg: number) => void,
    maxDuration: number,
    progressVideo: number
}

export default function ShortVideoRange({maxDuration, progressVideo, handleChangeTimeCode}: ShortVideoRangeProps) {
    return (
        <ShortVideoRangeWrapper>
            <ShortVideoRangeContainer>
                <ShortVideoRangeInput
                    onChange={(e) => handleChangeTimeCode(Number(e.target.value))}
                    type="range"
                    id="range"
                    min="0"
                    max={maxDuration}
                    value={progressVideo}
                    name="range"
                />
            </ShortVideoRangeContainer>
        </ShortVideoRangeWrapper>
    )
}

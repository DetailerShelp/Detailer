import SvgHelper from "@/common/svg-helper/SvgHelper";
import { ShortVideoMixerRange, ShortVideoMixerWrapper, ShortVideoRangeCircle, ShortVideoRangeInput, ShortVideoRangeProgress } from "@/modules/user/shorts/styles";

interface ShortVideoMixerProps {
    isMixer: boolean,
    setIsMixer: (arg: boolean) => void,
    soundValue: number,
    setSoundValue: (arg: number) => void
}

export default function ShortVideoMixer({isMixer, setIsMixer, soundValue, setSoundValue}: ShortVideoMixerProps) {
    return (
        <ShortVideoMixerWrapper>
            <SvgHelper iconName={soundValue > 0 ? 'soundOn' : 'soundOff'} width='30px' height='30px' onClick={() => setIsMixer(!isMixer)} />
            <ShortVideoMixerRange style={{ opacity: isMixer ? 1 : 0 }}>
                <ShortVideoRangeInput
                    onChange={(e) => setSoundValue(Number(e.target.value))}
                    type="range"
                    id="sound-short"
                    min="0"
                    max="100"
                    value={soundValue}
                    name="sound-short"
                />
                <ShortVideoRangeProgress style={{ width: `${soundValue}%` }}></ShortVideoRangeProgress>
                <ShortVideoRangeCircle style={{ left: `${soundValue - 1}%` }}></ShortVideoRangeCircle>
            </ShortVideoMixerRange>
        </ShortVideoMixerWrapper>
    )
}

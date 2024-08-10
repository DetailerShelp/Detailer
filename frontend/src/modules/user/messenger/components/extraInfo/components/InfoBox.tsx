import { TitleMessage, InfoBoxWrapper } from "@/modules/user/messenger/components/extraInfo/style";
import TypeMedia from "@/modules/user/messenger/components/helpers/TypeMedia";

interface InfoBoxProps {
    title?: string;
    message?: string;
    mediaType?: string;
}

const InfoBox = ({ title, message, mediaType }: InfoBoxProps) => {
    return (
        <InfoBoxWrapper>
            <TitleMessage>{title}</TitleMessage>
            <br />
            <span>
                {mediaType && !message ?
                    <TypeMedia mediaInfo={mediaType} />
                    :
                    message
                }
            </span>
        </InfoBoxWrapper>
    )
};

export default InfoBox;
import { TitleMessage, InfoBoxWrapper } from "@/modules/user/messenger/components/extraInfo/style";

interface InfoBoxProps {
    title?: string;
    message?: string;
}

const InfoBox = ({ title, message }: InfoBoxProps) => {
    return (
        <InfoBoxWrapper>
            <TitleMessage>{title}</TitleMessage>
            <br />
            <span>{message}</span>
        </InfoBoxWrapper>
    )
};

export default InfoBox;
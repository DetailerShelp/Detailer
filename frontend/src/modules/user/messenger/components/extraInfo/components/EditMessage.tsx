import DragAndDropUpload from "@/common/components/DraggerUploadFile";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { IMessage } from "@/store/reducers/messenger/messengerTypes";
import InfoBox from "@/modules/user/messenger/components/extraInfo/components/InfoBox";
import { ReplaceMediaWrapper, ReplaceText } from "@/modules/user/messenger/components/extraInfo/style";

interface EditMessageProps {
    editMessage?: IMessage;
    handleNewMedia: (file: File) => void;
}

const EditMessage = ({ editMessage, handleNewMedia }: EditMessageProps) => {
    if (!editMessage) {
        return null;
    }

    const getTypeEditMessage = () => {
        if (editMessage?.media) {
            return 'media';
        } else {
            return 'text'
        }
    }
    const typeEditMessage = getTypeEditMessage();

    const renderComponents: { [key: string]: JSX.Element } = {
        'media': (
            <DragAndDropUpload onFile={handleNewMedia}>
                <ReplaceMediaWrapper>
                    <SvgHelper iconName="replace" color='blue' />
                    <ReplaceText>Заменить</ReplaceText>
                </ReplaceMediaWrapper>
            </DragAndDropUpload>
        ),

        'text': (
            <InfoBox title="Редактирование" message={editMessage.text} />
        ),
    };

    return renderComponents[typeEditMessage] || null;
}

export default EditMessage;
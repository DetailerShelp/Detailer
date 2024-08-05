import SvgHelper from "@/common/svg-helper/SvgHelper";
import { SendingMessageInput, SendingMessageWrapper } from "./styles";

// ToDo
export default function SendingMessage() {
    return (
        <SendingMessageWrapper>
            <SvgHelper iconName="bell" height="26px" width="26px" />
            <SendingMessageInput placeholder="Комментарий" />
            <SvgHelper iconName="arrowRight" height="26px" width="26px"  onClick={() => {}}/>
        </SendingMessageWrapper>
    )
}
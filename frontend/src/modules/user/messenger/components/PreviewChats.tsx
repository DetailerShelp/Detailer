import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { SearchInput } from "@/common/styles/tags/input/SearchInput";
import {
    PreviewChatsWrapper,
    ChatToolWrapper,
    AdderChat,
} from "@/modules/user/messenger/components/style";
import RenderPreviewChats from "@/modules/user/messenger/components/render/RenderPreviewChats";

const PreviewChats = () => {
    return (
        <PreviewChatsWrapper>

            <ChatToolWrapper>
                <SearchInput />
                <AdderChat onClick={() => console.log('newchat')}>
                    <ButtonWithIcon size={40} icon="createChat"></ButtonWithIcon>
                </AdderChat>
            </ChatToolWrapper>

            <RenderPreviewChats/>
        </PreviewChatsWrapper>
    )
};

export default PreviewChats;
import { DropdownMenu } from "@/common/components/dropdown-menu/DropdownMenu";
import { DropdownMenuItem } from "@/common/components/dropdown-menu/DropdownMenuItem";
import { useActions } from "@/store/actions";
import React, { useRef } from "react";
import useDataMessageStore from "@/modules/user/messenger/hooks/useDataMessageStore";

interface ChatDropdownMenuProps {
    chatId: number | string;
};

const ChatDropdownMenu = ({ chatId }: ChatDropdownMenuProps) => {
    const loader = useRef<HTMLInputElement>(null);

    const {currentChat} = useDataMessageStore({chatId: chatId});
    const { clearChatMessages, changeNotification, changeTheme } = useActions();

    const handleClear = () => {
        clearChatMessages({ chatId: chatId });
    };

    const handleNotification = () => {
        changeNotification({ chatId: chatId });
    };

    const hadleTheme = () => {
        if (loader.current) {
            loader.current.click();
        };
    };

    const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0] as File;
            changeTheme({chatId: chatId, media: file});
        };
    };

    return (
        <>
            <DropdownMenu style={{ top: '100%', zIndex: '10' }}>
                <DropdownMenuItem
                    icon="call"
                    title={!currentChat.notification ? 'Включить уведомления' : 'Выключить уведомления'}
                    onClick={handleNotification}
                />
                <DropdownMenuItem icon="speaker" title="Включить звук" />
                <DropdownMenuItem icon="image" title="Оформление чата" onClick={hadleTheme} />
                <DropdownMenuItem icon="clear" title="Очистить историю" onClick={handleClear} />
                <DropdownMenuItem icon="trash" title="Удалить чат" isRed={true} />
            </DropdownMenu>

            <input type="file" style={{ display: 'none' }} ref={loader} onChange={handleChangeTheme} />
        </>
    )
};

export default ChatDropdownMenu;
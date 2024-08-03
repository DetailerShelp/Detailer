import { Outlet, useLocation } from 'react-router-dom';
import PreviewChats from '@/modules/user/messenger/components/PreviewChats';

const ChatPage = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname === '/messenger' && <PreviewChats />}
            <Outlet />
        </>
    );
};

export default ChatPage;
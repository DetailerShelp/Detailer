import { DropdownMenu } from "@/common/components/dropdown-menu/DropdownMenu";
import { DropdownMenuItemButton } from "@/common/components/dropdown-menu/DropdownMenuItem";

const ChatDropdownMenu = () => {
    return (
        <DropdownMenu style={{ top: '100%', zIndex:'10'}}>
          <DropdownMenuItemButton icon="call" title="Включить уведомления"/>
          <DropdownMenuItemButton icon="speaker" title="Включить звук"/>
          <DropdownMenuItemButton icon="image" title="Оформление чата"/>
          <DropdownMenuItemButton icon="clear" title="Очистить историю"/>
          <DropdownMenuItemButton icon="trash" title="Удалить чат" isRed={true}/>
        </DropdownMenu>
    )
};

export default ChatDropdownMenu;
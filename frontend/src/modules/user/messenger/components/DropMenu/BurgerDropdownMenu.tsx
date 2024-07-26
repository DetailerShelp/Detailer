import { DropdownMenu } from "@/common/components/dropdown-menu/DropdownMenu";
import { DropdownMenuItem } from "@/common/components/dropdown-menu/DropdownMenuItem";

const ChatDropdownMenu = () => {
    return (
        <DropdownMenu style={{ top: '100%', zIndex:'10'}}>
          <DropdownMenuItem icon="call" title="Включить уведомления"/>
          <DropdownMenuItem icon="speaker" title="Включить звук"/>
          <DropdownMenuItem icon="image" title="Оформление чата"/>
          <DropdownMenuItem icon="clear" title="Очистить историю"/>
          <DropdownMenuItem icon="trash" title="Удалить чат" isRed={true}/>
        </DropdownMenu>
    )
};

export default ChatDropdownMenu;
import { DropdownMenu } from "@/common/components/dropdown-menu/DropdownMenu";
import { DropdownMenuItemButton } from "@/common/components/dropdown-menu/DropdownMenuItem";

interface MessageDropdownMenuProps {
  handleCopy: ()=>void;
};

const MessageDropdownMenu = ({handleCopy} : MessageDropdownMenuProps) => {
    return (
        <DropdownMenu style={{ top: '100%', left:'30%', marginTop: '10px', width:'200px', zIndex:'10'}}>
          <DropdownMenuItemButton icon="answer" title="Ответить"/>
          <DropdownMenuItemButton icon="copy" title="Скопировать" onClick={handleCopy}/>
          <DropdownMenuItemButton icon="editer" title="Изменить"/>
          <DropdownMenuItemButton icon="pinMenu" title="Закрепить"/>
          <DropdownMenuItemButton icon="forward" title="Переслать"/>
          <DropdownMenuItemButton icon="trash" title="Удалить" isRed={true}/>
        </DropdownMenu>
    )
};

export default MessageDropdownMenu;
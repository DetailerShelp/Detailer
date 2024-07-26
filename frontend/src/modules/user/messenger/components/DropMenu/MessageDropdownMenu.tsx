import { DropdownMenu } from "@/common/components/dropdown-menu/DropdownMenu";
import { DropdownMenuItem } from "@/common/components/dropdown-menu/DropdownMenuItem";

interface MessageDropdownMenuProps {
  handleCopy: ()=>void;
};

const MessageDropdownMenu = ({handleCopy} : MessageDropdownMenuProps) => {
    return (
        <DropdownMenu style={{ top: '100%', left:'30%', marginTop: '10px', width:'200px', zIndex:'10'}}>
          <DropdownMenuItem icon="answer" title="Ответить"/>
          <DropdownMenuItem icon="copy" title="Скопировать" onClick={handleCopy}/>
          <DropdownMenuItem icon="editer" title="Изменить"/>
          <DropdownMenuItem icon="pinMenu" title="Закрепить"/>
          <DropdownMenuItem icon="forward" title="Переслать"/>
          <DropdownMenuItem icon="trash" title="Удалить" isRed={true}/>
        </DropdownMenu>
    )
};

export default MessageDropdownMenu;
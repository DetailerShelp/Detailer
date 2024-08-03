import { DropdownMenu } from "@/common/components/dropdown-menu/DropdownMenu";
import { DropdownMenuItem } from "@/common/components/dropdown-menu/DropdownMenuItem";

interface MessageDropdownMenuProps {
  isOpen: boolean;
  handleCopy: () => void;
  handleAnswer: () => void;
  handleDelete: () => void;
  handlePinMessage: () => void;
  handleForwardMessage: () => void;
};

const MessageDropdownMenu = ({ isOpen, handleCopy, handleAnswer, handleDelete, handlePinMessage, handleForwardMessage }: MessageDropdownMenuProps) => {
  if(!isOpen){
    return null;
  };

  return (
    <DropdownMenu style={{ top: '100%', left: '30%', marginTop: '10px', width: '200px', zIndex: '10' }}>
      <DropdownMenuItem icon="answer" title="Ответить" onClick={handleAnswer} />
      <DropdownMenuItem icon="copy" title="Скопировать" onClick={handleCopy}/>
      <DropdownMenuItem icon="editer" title="Изменить" />
      <DropdownMenuItem icon="pinMenu" title="Закрепить" onClick={handlePinMessage} />
      <DropdownMenuItem icon="forward" title="Переслать" onClick={handleForwardMessage} />
      <DropdownMenuItem icon="trash" title="Удалить" isRed={true} onClick={handleDelete} />
    </DropdownMenu>
  )
};

export default MessageDropdownMenu;
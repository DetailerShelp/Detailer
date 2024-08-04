import { DropdownMenu } from "@/common/components/dropdown-menu/DropdownMenu";
import { DropdownMenuItem } from "@/common/components/dropdown-menu/DropdownMenuItem";

interface MessageDropdownMenuProps {
  isOpen: boolean;
  handleCopy: () => void;
  handleAnswer: () => void;
  handleDelete: () => void;
  handlePinMessage: () => void;
  handleForwardMessage: () => void;
  x: number,
  y: number,
};

const MessageDropdownMenu = ({
  isOpen,
  handleCopy,
  handleAnswer,
  handleDelete,
  handlePinMessage,
  handleForwardMessage,
  x, y,
}: MessageDropdownMenuProps) => {
  if (!isOpen) {
    return null;
  };

  const height = window.innerHeight - 250 > y ? `${y}px` : `${y-300}px`;

  return (
    <DropdownMenu style={{position:'fixed', top: height, left: `${x-70}px`, marginTop: '10px', width: '200px', zIndex: '100' }}>
      <DropdownMenuItem icon="answer" title="Ответить" onClick={handleAnswer} />
      <DropdownMenuItem icon="copy" title="Скопировать" onClick={handleCopy} />
      <DropdownMenuItem icon="editer" title="Изменить" />
      <DropdownMenuItem icon="pinMenu" title="Закрепить" onClick={handlePinMessage} />
      <DropdownMenuItem icon="forward" title="Переслать" onClick={handleForwardMessage} />
      <DropdownMenuItem icon="trash" title="Удалить" isRed={true} onClick={handleDelete} />
    </DropdownMenu>
  )
};

export default MessageDropdownMenu;
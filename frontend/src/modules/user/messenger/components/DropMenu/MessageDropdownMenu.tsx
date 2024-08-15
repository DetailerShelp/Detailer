import { DropdownMenu } from "@/common/components/dropdown-menu/DropdownMenu";
import { DropdownMenuItem } from "@/common/components/dropdown-menu/DropdownMenuItem";
import { useToast } from "@/common/toast/toast-contex";
import { copySucces, deleteSucces } from "@/common/toast/toastsMessages/messengerToasts";
import { useActions } from "@/store/actions";
import { useCallback, useRef } from "react";

interface MessageDropdownMenuProps {
  isOpen: boolean;
  mesId: number | string;
  chatId: number | string;
  setDropdownOpen: (_: boolean) => void;
  setOpenModal: (_: boolean) => void;
  text?: string;
  media?: File;
  isMine?: boolean;
  x: number,
  y: number,
};

const MessageDropdownMenu = ({
  isOpen,
  mesId,
  chatId,
  setDropdownOpen,
  setOpenModal,
  media,
  text,
  isMine = true,
  x, y,
}: MessageDropdownMenuProps) => {
  if (!isOpen) {
    return null;
  };

  const refDownload = useRef<HTMLAnchorElement>(null);

  const height = window.innerHeight - 270 > y ? `${y}px` : `${y - 300}px`;

  const {
    setAnsweredMessage,
    deleteMessage,
    pinMessage,
    addForwardMessage,
    setEditedMessage,
  } = useActions();

  const toast = useToast();

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text || '');
    toast?.success(copySucces);
  }, [text]);

  const handleAnswer = useCallback(() => {
    setAnsweredMessage({ chatId, answeredMes: mesId });
    setDropdownOpen(false);
  }, [chatId, mesId]);

  const handleDelete = useCallback(() => {
    deleteMessage({ chatId: chatId, mesId: mesId });
    setDropdownOpen(false);
    toast?.success(deleteSucces);
  }, [chatId, mesId]);

  const handlePinMessage = useCallback(() => {
    pinMessage({ chatId: chatId, mesId: mesId });
    setDropdownOpen(false);
  }, [chatId, mesId]);

  const handleForwardMessage = useCallback(() => {
    addForwardMessage({ chatId: chatId, mesId: mesId });
    setOpenModal(true);
    setDropdownOpen(false);
  }, [chatId, mesId]);

  const handleEdit = useCallback(() => {
    setEditedMessage({ chatId: chatId, mesId: mesId });
  }, [chatId, mesId]);

  const handleCopyMedia = useCallback(()=>{
    if(refDownload?.current){
      refDownload.current.click();
    }
  }, [media]);

  return (
    <DropdownMenu style={{
      position: 'fixed',
      top: height,
      left: `${x - 70}px`,
      marginTop: '10px',
      width: '210px',
      zIndex: '100'
    }}>
      <DropdownMenuItem icon="answer" title="Ответить" onClick={handleAnswer} />
      {media &&
        <>
          <DropdownMenuItem icon="savePicture" title="Сохранить" onClick={handleCopyMedia} />
          <a ref={refDownload} href={URL.createObjectURL(media)} download={media.name} style={{opacity: 0}}/>
        </>
      }
      <DropdownMenuItem icon="copy" title="Скопировать" onClick={handleCopy} />
      {isMine && <DropdownMenuItem icon="editer" title="Изменить" onClick={handleEdit} />}
      <DropdownMenuItem icon="pinMenu" title="Закрепить" onClick={handlePinMessage} />
      <DropdownMenuItem icon="forward" title="Переслать" onClick={handleForwardMessage} />
      <DropdownMenuItem icon="trash" title="Удалить" isRed={true} onClick={handleDelete} />
    </DropdownMenu>
  )
};

export default MessageDropdownMenu;
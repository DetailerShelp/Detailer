import { DropdownMenu } from "@/common/components/dropdown-menu/DropdownMenu";
import { DropdownMenuItem } from "@/common/components/dropdown-menu/DropdownMenuItem";
import { authorizedUser } from "@/store/reducers/user/authorizedUser";
import { useParams } from "react-router-dom";

export const ProfileDropdownMenu = () => {
  const { userId } = useParams();
  const currentUserId = authorizedUser();
  const isAdmin = (currentUserId == Number(userId));

  return (
    // TODO: вынести linkи в константы
    <>
      {isAdmin ? (
        <DropdownMenu>
          <DropdownMenuItem icon="editProfile" title="Редактировать профиль" link="/edit" />
          <DropdownMenuItem icon="qrcode" title="QR-code Пользователя" link="/" />
          <DropdownMenuItem icon="info" title="Подробная информация" link="/" />
          <DropdownMenuItem icon="saved" title="Сохраненное" link="/saved" />
          <DropdownMenuItem icon="like" title="Отмеченное" link="/liked" />
          <DropdownMenuItem icon="settings"title="Настройки"link="/settings" />
          <DropdownMenuItem icon="help" title="Поддержка" link="/help" />
          <DropdownMenuItem icon="quit" title="Выйти" isRed={true} link="/" />
        </DropdownMenu>
      ) : (
        <DropdownMenu>
          {/* //TODO subscribe, notifications, saved, block, */}
          <DropdownMenuItem icon="subscribe" title="Подписаться" link="/edit" />
          <DropdownMenuItem icon="qrcode" title="QR-code Пользователя" link="/" />
          <DropdownMenuItem icon="notificationsOn" title="Включить уведомления" link="/edit" />
          <DropdownMenuItem icon="info" title="Подробная информация" link="/" />
          <DropdownMenuItem icon="saved" title="Добавть в сохраненное" link="/" />
          <DropdownMenuItem icon="reportProfile" title="Пожаловаться" link="/help" />
          <DropdownMenuItem icon="block" title="Заблокировать" isRed={true} link="/" />
        </DropdownMenu>
      )}
    </>
  );
};

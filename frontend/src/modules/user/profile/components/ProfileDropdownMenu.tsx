import { DropdownMenu } from "@/common/components/dropdown-menu/DropdownMenu";
import { DropdownMenuItem } from "@/common/components/dropdown-menu/DropdownMenuItem";
import { authorizedUser } from "@/store/reducers/user/authorizedUser";
import { useParams } from "react-router-dom";

interface ProfileDropdownMenuProps {
  setDropdownOpen: (_: boolean) => void;
  setModalProfileInfo: (_: boolean) => void;
  setModalQR: (_: boolean) => void;
  setModalReport: (_: boolean) => void;
  setModalQuit: (_: boolean) => void;
  setModalBlock: (_: boolean) => void;
  isBlocked: boolean;
}

export const ProfileDropdownMenu = ({
  setDropdownOpen,
  setModalProfileInfo,
  setModalQR,
  setModalReport,
  setModalQuit,
  setModalBlock,
  isBlocked,
}: ProfileDropdownMenuProps) => {
  const { userId } = useParams();
  const currentUserId = authorizedUser();
  const isAdmin = currentUserId == Number(userId);

  const handleProfileInfo = () => {
    setDropdownOpen(false);
    setModalProfileInfo(true);
  };

  const handleQRClick = () => {
    setDropdownOpen(false);
    setModalQR(true);
  };

  const handleReportClick = () => {
    setDropdownOpen(false);
    setModalReport(true);
  };

  const handleQuitClick = () => {
    setDropdownOpen(false);
    setModalQuit(true);
  };

  const handleBlockClick = () => {
    setDropdownOpen(false);
    setModalBlock(true);
  };

  return (
    // TODO: вынести linkи в константы
    <>
      {isAdmin ? (
        <DropdownMenu>
          <DropdownMenuItem
            icon="editProfile"
            title="Редактировать профиль"
            link="/edit"
          />
          <DropdownMenuItem
            icon="qrcode"
            title="QR-code Пользователя"
            onClick={handleQRClick}
          />
          <DropdownMenuItem
            icon="info"
            title="Подробная информация"
            onClick={handleProfileInfo}
          />
          <DropdownMenuItem icon="saved" title="Сохраненное" link="/saved" />
          <DropdownMenuItem icon="like" title="Отмеченное" link="/liked" />
          <DropdownMenuItem
            icon="settings"
            title="Настройки"
            link="/settings"
          />
          <DropdownMenuItem icon="help" title="Поддержка" link="/help" />
          <DropdownMenuItem
            icon="quit"
            title="Выйти"
            isRed={true}
            onClick={handleQuitClick}
          />
        </DropdownMenu>
      ) : (
        <DropdownMenu>
          {/* //TODO subscribe, notifications, saved, block, */}
          {!isBlocked && (
            <>
              <DropdownMenuItem
                icon="subscribe"
                title="Подписаться"
                link="/edit"
              />
              <DropdownMenuItem
                icon="qrcode"
                title="QR-code Пользователя"
                onClick={handleQRClick}
              />

              <DropdownMenuItem
                icon="notificationsOn"
                title="Включить уведомления"
                link="/edit"
              />
              <DropdownMenuItem
                icon="info"
                title="Подробная информация"
                onClick={handleProfileInfo}
              />
              <DropdownMenuItem
                icon="saved"
                title="Добавть в сохраненное"
                link="/"
              />
              <DropdownMenuItem
                icon="reportProfile"
                title="Пожаловаться"
                onClick={handleReportClick}
              />
            </>
          )}
          <DropdownMenuItem
            icon={isBlocked ? "unblock" : "block"}
            title={isBlocked ? "Разблокировать" : "Заблокировать"}
            isRed={true}
            onClick={handleBlockClick}
          />
        </DropdownMenu>
      )}
    </>
  );
};

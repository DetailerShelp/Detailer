import { DropdownMenu } from "@/common/components/dropdown-menu/DropdownMenu";
import { DropdownMenuItem } from "@/common/components/dropdown-menu/DropdownMenuItem";

interface PostDropdownMenuProps {
  userId?: number;
  setDropdownOpen: (_: boolean) => void;
  setModalQR: (_: boolean) => void;
  setModalReport: (_: boolean) => void;
}

export const PostDropdownMenu = ({
  userId,
  setDropdownOpen,
  setModalQR,
  setModalReport,
}: PostDropdownMenuProps) => {
  const handleQRClick = () => {
    setDropdownOpen(false);
    setModalQR(true);
  };

  const handleReportClick = () => {
    setDropdownOpen(false);
    setModalReport(true);
  };
  return (
    <DropdownMenu>
      <DropdownMenuItem icon="unsubscribe" title="Отменить подписку" link="/" />
      <DropdownMenuItem
        icon="qrcode"
        title="QR-code Публикации"
        onClick={handleQRClick}
      />
      <DropdownMenuItem icon="hide" title="Не интересует" link="/" />
      <DropdownMenuItem
        icon="profile"
        title="Информация об аккаунте"
        link={`/profile/${userId}`}
      />
      <DropdownMenuItem
        icon="report"
        title="Пожаловаться"
        isRed={true}
        onClick={handleReportClick}
      />
    </DropdownMenu>
  );
};

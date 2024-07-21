import { DropdownMenu } from "@/common/components/dropdown-menu/DropdownMenu";
import { DropdownMenuItem } from "@/common/components/dropdown-menu/DropdownMenuItem";

export const PostDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuItem icon="unsubscribe" title="Отменить подписку" link="/" />
      <DropdownMenuItem icon="qrcode" title="QR-code Публикации" link="/" />
      <DropdownMenuItem icon="hide" title="Не интересует" link="/" />
      <DropdownMenuItem icon="profile" title="Информация об аккаунте" link="/" />
      <DropdownMenuItem icon="report" title="Пожаловаться" isRed={true} link="/" />
    </DropdownMenu>
  );
};

import {
  NavigationList,
  NavigationPanel,
} from "@/common/components/navpanel/styles";
import { NavItem } from "@/common/components/navpanel/NavItem";

export const NavPanel = () => {
  return (
    <NavigationPanel>
      <NavigationList>
        {window.innerWidth >= 768 ? (
          <>
            <NavItem linkTo="profile" name="Профиль" icon="profile" />
            <NavItem linkTo="home" name="Главная" icon="home" />
            <NavItem linkTo="messenger" name="Мессенджер" icon="messenger" />
            <NavItem linkTo="shorts" name="Шортсы" icon="shorts" />
            <NavItem linkTo="saved" name="Сохраненное" icon="saved" />
            <NavItem linkTo="qrcode" name="QR-code" icon="qrcode" />
            <NavItem linkTo="settings" name="Настройки" icon="settings" />
            <NavItem linkTo="help" name="Поддержка" icon="help" />
          </>
        ) : (
          <>
            <NavItem linkTo="home" name="Главная" icon="home" />
            <NavItem linkTo="search" name="Поиск" icon="search" />
            <NavItem linkTo="messenger" name="Мессенджер" icon="messenger" />
            <NavItem linkTo="shorts" name="Шортсы" icon="shorts" />
            <NavItem linkTo="profile" name="Профиль" icon="profile" />
          </>
        )}
      </NavigationList>
    </NavigationPanel>
  );
};

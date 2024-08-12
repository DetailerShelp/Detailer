import {
  NavigationList,
  NavigationPanel,
} from "@/common/components/navpanel/styles";
import { NavItem } from "@/common/components/navpanel/NavItem";
import { authorizedUser } from "@/store/reducers/user/authorizedUser";

export const NavPanel = () => {
  //TODO как бэк будет готов
  const userId = authorizedUser();
  return (
    <NavigationPanel>
      <NavigationList>
        {window.innerWidth >= 768 ? (
          <>
            <NavItem linkTo={`/profile/${userId}`} name="Профиль" icon="profile" />
            <NavItem linkTo="/home" name="Главная" icon="home" />
            <NavItem linkTo="/messenger" name="Мессенджер" icon="messenger" />
            <NavItem linkTo="/shorts" name="Шортсы" icon="shorts" />
            <NavItem linkTo="/saved" name="Сохраненное" icon="saved" />
            <NavItem linkTo="/settings" name="Настройки" icon="settings" />
            <NavItem linkTo="/help" name="Поддержка" icon="help" />
          </>
        ) : (
          <>
            <NavItem linkTo="/home" name="Главная" icon="home" />
            <NavItem linkTo="/search" name="Поиск" icon="search" />
            <NavItem linkTo="/messenger" name="Мессенджер" icon="messenger" />
            <NavItem linkTo="/shorts" name="Шортсы" icon="shorts" />
            <NavItem linkTo={`/profile/${userId}`} name="Профиль" icon="profile" />
          </>
        )}
      </NavigationList>
    </NavigationPanel>
  );
};

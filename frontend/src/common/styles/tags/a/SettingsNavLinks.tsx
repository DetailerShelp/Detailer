import { NavigationList, NavProfileLink } from "@/common/styles/tags/a/NavProfileLink";

export const SettingsNavLinks = () => {
  return (
    <NavigationList>
        {/* TODO переделать link */}
      <NavProfileLink link="/" icon="fone" title="Фон" />
      <NavProfileLink link="/" icon="color" title="Цвет" />
    </NavigationList>
  );
};
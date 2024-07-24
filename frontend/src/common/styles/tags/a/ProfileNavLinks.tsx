import { NavProfileLink, NavigationList } from "@/common/styles/tags/a/NavProfileLink";

export const ProfileNavLinks = () => {
  return (
    <NavigationList>
        {/* TODO переделать link */}
      <NavProfileLink link="/profile" icon="post" title="Посты" />
      <NavProfileLink link="/" icon="shorts" title="Шортсы" />
      <NavProfileLink link="/" icon="garage" title="Гараж" />
    </NavigationList>
  );
};

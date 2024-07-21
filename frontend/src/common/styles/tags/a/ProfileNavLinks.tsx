import styled from "styled-components";
import { NavProfileLink } from "@/common/styles/tags/a/NavProfileLink";

const ProfileNavList = styled("ul")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ProfileNavLinks = () => {
  return (
    <ProfileNavList>
        {/* TODO переделать link */}
      <NavProfileLink link="/profile" icon="post" title="Посты" />
      <NavProfileLink link="/" icon="shorts" title="Шортсы" />
      <NavProfileLink link="/" icon="garage" title="Гараж" />
    </ProfileNavList>
  );
};

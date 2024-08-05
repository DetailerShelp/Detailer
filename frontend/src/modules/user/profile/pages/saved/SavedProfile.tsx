import { ProfileEmptyPublication } from "@/modules/user/profile/components/ProfileEmptyPublication";
import { User } from "@/store/reducers/user/types";

//TODO Добавить отмеченных пользователей
interface SavedProfileProps {
  profile?: User;
}

export const SavedProfile = ({ profile }: SavedProfileProps) => {
  return (
    <>
      {!!profile && (
        <ProfileEmptyPublication title="Нет профилей" icon="profile" />
      )}
    </>
  );
};

import { useState } from "react";
import { ProfileCreatePublication } from "@/modules/user/profile/components/ProfileCreatePublication";
import ModalPost from "@/modules/NewPost/ModalPost";
import { ProfileEmptyPublication } from "@/modules/user/profile/components/ProfileEmptyPublication";
import { ShortShortsInfo } from "@/store/reducers/shorts/types";
import { ProfileRenderShorts } from "@/modules/user/profile/components/publication/render/ProfileRenderShorts";

interface ProfileShortsProps {
  shorts?: ShortShortsInfo[];
  isAuthorizedUser: boolean | undefined;
}

export const ProfileShorts = ({
  shorts,
  isAuthorizedUser,
}: ProfileShortsProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ModalPost isOpen={open} setOpen={setOpen} page="shorts" />
      {isAuthorizedUser && (
        <ProfileCreatePublication
          title="Создать шортс"
          click={() => setOpen(true)}
        />
      )}

      {shorts?.length !== 0 ? (
        <ProfileRenderShorts shorts={shorts} />
      ) : (
        <ProfileEmptyPublication title="Нет шортсов" icon="shorts" />
      )}
    </>
  );
};

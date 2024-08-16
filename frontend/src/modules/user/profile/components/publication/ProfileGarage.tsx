import ModalPost from "@/modules/NewPost/ModalPost";
import { useState } from "react";
import { ProfileCreatePublication } from "@/modules/user/profile/components/ProfileCreatePublication";
import { ProfileEmptyPublication } from "@/modules/user/profile/components/ProfileEmptyPublication";
import { ShortAutoInfo } from "@/store/reducers/auto/types";
import { ProfileRenderGarage } from "@/modules/user/profile/components/publication/render/ProfileRenderGarage";

interface ProfileGarageProps {
  garage?: ShortAutoInfo[];
  isAuthorizedUser: boolean | undefined;
}

export const ProfileGarage = ({
  garage,
  isAuthorizedUser,
}: ProfileGarageProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ModalPost isOpen={open} setOpen={setOpen} page="garage" />
      {isAuthorizedUser && (
        <ProfileCreatePublication
          title="Добавить автомобиль"
          click={() => setOpen(true)}
        />
      )}

      {garage?.length !== 0 ? (
        <ProfileRenderGarage garage={garage} />
      ) : (
        <ProfileEmptyPublication title="Нет автомобилей" icon="garage" />
      )}
    </>
  );
};

import {
  borders,
  colors,
  device,
  transitions,
} from "@/common/styles/styleConstants";
import { useState } from "react";
import styled from "styled-components";
import { ProfileCreatePublication } from "@/modules/user/profile/components/ProfileCreatePublication";
import ModalPost from "@/modules/NewPost/ModalPost";
import { ProfileEmptyPublication } from "./ProfileEmptyPublication";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { ShortShortsInfo } from "@/store/reducers/shorts/types";

const ProfileShortsList = styled("ul")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin-bottom: 5px;

  @media ${device.mobileL} {
    gap: 3px;
  }
`;

const ProfileShortsItem = styled("li")`
  width: 100%;
  max-width: 178px;
  aspect-ratio: 0.5;
`;

const ProfileShortsLink = styled("a")`
  position: relative;
`;

const ProfileShortsIcon = styled(SvgHelper)`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 1;

  color: ${colors.white};

  @media ${device.mobileL} {
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
  }
`;

const ProfileShortsImage = styled("img")`
  width: 100%;
  aspect-ratio: 0.5;
  object-fit: cover;
  object-position: center;
  border-radius: ${borders.smallBorderRadius};
  transition: ${transitions.fastTransition};

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;

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
      {/* //TODO navigation in ModalPost */}
      <ModalPost isOpen={open} setOpen={setOpen} />
      {isAuthorizedUser && (
        <ProfileCreatePublication
          title="Создать шортс"
          click={() => setOpen(true)}
        />
      )}

      {shorts?.length !== 0 ? (
        <ProfileShortsList>
          {shorts?.map((item) => (
            <ProfileShortsItem>
              <ProfileShortsLink>
                <ProfileShortsIcon iconName="shorts" />
                <ProfileShortsImage src={item.img} />
              </ProfileShortsLink>
            </ProfileShortsItem>
          ))}
        </ProfileShortsList>
      ) : (
        <ProfileEmptyPublication title="Нет шортсов" icon="shorts" />
      )}
    </>
  );
};

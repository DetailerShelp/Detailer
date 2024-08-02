import { borders, device } from "@/common/styles/styleConstants";
import ModalPost from "@/modules/NewPost/ModalPost";
import { ShortPostInfo } from "@/store/reducers/post/types";
import { useState } from "react";
import styled from "styled-components";
import { ProfileCreatePublication } from "@/modules/user/profile/components/ProfileCreatePublication";
import { ProfileEmptyPublication } from "@/modules/user/profile/components/ProfileEmptyPublication";

const ProfilePostList = styled("ul")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin-bottom: 5px;

  @media ${device.mobileL} {
    gap: 3px;
  }
`;

const ProfilePostItem = styled("li")`
  width: 100%;
  max-width: 178px;
  aspect-ratio: 1;
`;

const ProfilePostLink = styled("a")`
  position: relative;
  
  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;

const ProfilePostImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: ${borders.smallBorderRadius};
`;

interface ProfilePostsProps {
  post?: ShortPostInfo[];
  isAuthorizedUser: boolean | undefined;
}

export const ProfilePosts = ({ post, isAuthorizedUser }: ProfilePostsProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ModalPost isOpen={open} setOpen={setOpen} />
      {isAuthorizedUser && (
        <ProfileCreatePublication
          title="Создать пост"
          click={() => setOpen(true)}
        />
      )}

      {post?.length !== 0 ? (
        <ProfilePostList>
          {post?.map((item) => (
            <ProfilePostItem>
              <ProfilePostLink>
                <ProfilePostImage src={item.img} />
              </ProfilePostLink>
            </ProfilePostItem>
          ))}
        </ProfilePostList>
      ) : (
        <ProfileEmptyPublication title="Нет постов" icon="post" />
      )}
    </>
  );
};

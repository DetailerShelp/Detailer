import ModalPost from "@/modules/NewPost/ModalPost";
import { ShortPostInfo } from "@/store/reducers/post/types";
import { useState } from "react";
import { ProfileCreatePublication } from "@/modules/user/profile/components/ProfileCreatePublication";
import { ProfileEmptyPublication } from "@/modules/user/profile/components/ProfileEmptyPublication";
import { ProfileRenderPosts } from "@/modules/user/profile/components/publication/render/ProfileRenderPosts";

interface ProfilePostsProps {
  post?: ShortPostInfo[];
  isAuthorizedUser: boolean | undefined;
}

export const ProfilePosts = ({ post, isAuthorizedUser }: ProfilePostsProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ModalPost isOpen={open} setOpen={setOpen} page="post" />
      {isAuthorizedUser && (
        <ProfileCreatePublication
          title="Создать пост"
          click={() => setOpen(true)}
        />
      )}

      {post?.length !== 0 ? (
        <ProfileRenderPosts post={post} />
      ) : (
        <ProfileEmptyPublication title="Нет постов" icon="post" />
      )}
    </>
  );
};

import { ShortPostInfo } from "@/store/reducers/post/types";
import {
  ProfilePostImage,
  ProfilePostItem,
  ProfilePostLink,
  ProfilePostList,
} from "@/modules/user/profile/components/publication/render/styles";

interface ProfileRenderPostsProps {
  post?: ShortPostInfo[];
}

export const ProfileRenderPosts = ({ post }: ProfileRenderPostsProps) => {
  return (
    <>
      {!!post && (
        <ProfilePostList>
          {post?.map((item) => (
            <ProfilePostItem key={item.id}>
              <ProfilePostLink>
                <ProfilePostImage src={item.img} />
              </ProfilePostLink>
            </ProfilePostItem>
          ))}
        </ProfilePostList>
      )}
    </>
  );
};

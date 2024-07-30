import { borders, device } from "@/common/styles/styleConstants";
import { ShortPostInfo } from "@/store/reducers/post/types";
import styled from "styled-components";

const ProfilePostList = styled("ul")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;

  @media ${device.mobileL} {
    gap: 3px;
  }
`;

const ProfilePostItem = styled("li")`
  width: 100%;
  max-width: 178px;
  aspect-ratio: 1;
`;

const ProfilePostLink = styled("a")``;

const ProfilePostImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: ${borders.smallBorderRadius};
`;

interface ProfilePostsProps {
  post?: ShortPostInfo[];
}

export const ProfilePosts = ({ post }: ProfilePostsProps) => {
  return (
    <ProfilePostList>
      {!!post &&
        post?.map((item) => (
          <ProfilePostItem>
            <ProfilePostLink>
              <ProfilePostImage src={item.img} />
            </ProfilePostLink>
          </ProfilePostItem>
        ))}
    </ProfilePostList>
  );
};

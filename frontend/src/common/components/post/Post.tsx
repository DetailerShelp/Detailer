import {
  PostBottomList,
  PostBottomItem,
  PostBottomWrapper,
  PostMenuSubsribeWrapper,
  PostMenuWrapper,
  PostTime,
  PostTopBarWrapper,
  PostWrapper,
} from "@/common/components/post/styles";
import { PostButtonFunctions } from "@/common/styles/tags/button/PostButtonFunctions";
import { WhiteButtonWithIcon } from "@/common/styles/tags/button/WhiteButtonWithIcon";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { useState } from "react";
import { PostDropdownMenu } from "@/common/components/post/components/PostDropdownMenu";
import { DropdownWrapper } from "@/common/components/dropdown-menu/styles";
import { ProfileLink } from "@/common/styles/tags/a/ProfileLink";
import { PostInfo } from "@/store/reducers/post/types";
import { PublicationSlider } from "@/common/components/publicationSlider/PublicationSlider";
import { MoreDescriptionButton } from "@/common/styles/tags/button/MoreDescriptionButton";

interface PostProps {
  post?: PostInfo;
}

// TODO Переделать структуру
export const Post = ({ post }: PostProps) => {
  const [dropdownIsOpen, setDropdownOpen] = useState(false);

  return (
    <PostWrapper>
      <PostTopBarWrapper>
        <ProfileLink user={post?.createdUser} />

        <PostMenuWrapper>
          <PostMenuSubsribeWrapper>
            <WhiteButtonWithIcon title="Подписаться" size={30} icon="plus" />
          </PostMenuSubsribeWrapper>
          <DropdownWrapper
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <ButtonWithIcon icon="burger" size={35} />
            {dropdownIsOpen && <PostDropdownMenu />}
          </DropdownWrapper>
        </PostMenuWrapper>
      </PostTopBarWrapper>

      {!!post?.publicationImg && (
        <>
          <PublicationSlider
            imageVideo={post.publicationImg}
            description={post.description}
          />
        </>
      )}

      <PostBottomWrapper>
        <PostBottomList>
          <PostBottomItem>
            <PostButtonFunctions
              icon="like"
              title="Нравится"
              count={post?.likedUsers}
            />
          </PostBottomItem>

          <PostBottomItem>
            <PostButtonFunctions
              icon="comment"
              title="Комментарии"
              count={post?.likedUsers}
            />
          </PostBottomItem>

          <PostBottomItem>
            <PostButtonFunctions icon="share" title="Поделиться" />
          </PostBottomItem>
        </PostBottomList>

        <PostButtonFunctions icon="saved" title="Сохранить" />
      </PostBottomWrapper>

      <MoreDescriptionButton description={post?.description} />

      <PostTime>{post?.createdAt}</PostTime>
    </PostWrapper>
  );
};

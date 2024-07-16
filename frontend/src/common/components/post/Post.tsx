import {
  PostBotomList,
  PostBottomItem,
  PostBottomWrapper,
  PostDescription,
  PostMenuWrapper,
  PostPublication,
  PostTime,
  PostTopBarWrapper,
  PostUserAvatar,
  PostUserName,
  PostUserWrapper,
  PostWrapper,
} from "@/common/components/post/styles";
import { PostButtonFunctions } from "@/common/styles/tags/button/PostButtonFunctions";
import defaultAvatar from "@/common/images/avatar.png";
import { WhiteButtonWithIcon } from "@/common/styles/tags/button/WhiteButtonWithIcon";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { useState } from "react";
import { PostDropdownMenu } from "@/common/components/post/components/PostDropdownMenu";
import { DropdownWrapper } from "../dropdown-menu/styles";

export const Post = () => {
  const [dropdownIsOpen, setDropdownOpen] = useState(false);
  return (
    <PostWrapper>
      <PostTopBarWrapper>
        <PostUserWrapper>
          <PostUserAvatar src={defaultAvatar} alt={`...'s avatar`} />
          <PostUserName>Nagibator228</PostUserName>
        </PostUserWrapper>

        <PostMenuWrapper>
          <WhiteButtonWithIcon title="Подписаться" size={30} icon="plus" />
          {/* //TODO Добавить плавное отображение dropdown */}
          <DropdownWrapper
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <ButtonWithIcon icon="burger" size={35} />
            {dropdownIsOpen && <PostDropdownMenu />}
          </DropdownWrapper>
        </PostMenuWrapper>
      </PostTopBarWrapper>

      <PostPublication src="https://arte1.ru/images/detailed/1/10281.jpg" />

      <PostBottomWrapper>
        <PostBotomList>
          <PostBottomItem>
            <PostButtonFunctions icon="like" title="Нравится" count={52} />
          </PostBottomItem>

          <PostBottomItem>
            <PostButtonFunctions
              icon="comment"
              title="Комментарии"
              count={24}
            />
          </PostBottomItem>

          <PostBottomItem>
            <PostButtonFunctions icon="share" title="Поделиться" />
          </PostBottomItem>
        </PostBotomList>

        <PostButtonFunctions icon="saved" title="Сохранить" />
      </PostBottomWrapper>

      <PostDescription>
        Описание — композиционная форма, которую используют в литературоведении
        и лингвистике для подробной характеристики предметов или явлений.
      </PostDescription>

      <PostTime>15 минут назад</PostTime>
    </PostWrapper>
  );
};

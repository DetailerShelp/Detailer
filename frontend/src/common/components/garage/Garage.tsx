import {
  GarageBottomList,
  GarageBottomItem,
  GarageBottomWrapper,
  GarageButtonWrapper,
  GarageCharcteristicTitle,
  GarageContentWrapper,
  GarageDescription,
  GarageMarkItem,
  GarageMarkList,
  GarageMarkSubtitle,
  GarageMarkWrapper,
  GarageMenuSubsribeWrapper,
  GarageMenuWrapper,
  GaragePublication,
  GarageTime,
  GarageTopBarWrapper,
  GarageWrapper,
} from "@/common/components/garage/styles";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { WhiteButtonWithIcon } from "@/common/styles/tags/button/WhiteButtonWithIcon";
import { DropdownWrapper } from "@/common/components/dropdown-menu/styles";
import { PostButtonFunctions } from "@/common/styles/tags/button/PostButtonFunctions";
import { CharacterisiticsList } from "@/common/components/garage/components/CharacterisiticsList";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import { useState } from "react";
import { GarageDropdownMenu } from "@/common/components/garage/components/GarageDropdownMenu";
import { ProfileLink } from "@/common/styles/tags/a/ProfileLink";
import { authorizedUser } from "@/store/reducers/user/authorizedUser";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";

export const Garage = () => {
  const [dropdownIsOpen, setDropdownOpen] = useState(false);

  const userId = authorizedUser();
  const { data } = useGetUserByIdQuery(Number(userId));

  return (
    <GarageWrapper>
      <GarageTopBarWrapper>
        <ProfileLink user={data} />

        <GarageMenuWrapper>
          <GarageMenuSubsribeWrapper>
            <WhiteButtonWithIcon title="Подписаться" size={30} icon="plus" />
          </GarageMenuSubsribeWrapper>
          <DropdownWrapper
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <ButtonWithIcon icon="burger" size={35} />
            {dropdownIsOpen && <GarageDropdownMenu />}
          </DropdownWrapper>
        </GarageMenuWrapper>
      </GarageTopBarWrapper>

      <GaragePublication
        src="https://storge.pic2.me/upload/147/59ee4f19c270a.jpg"
        alt="description"
      />

      <GarageBottomWrapper>
        <GarageBottomList>
          <GarageBottomItem>
            <PostButtonFunctions icon="like" title="Нравится" count={1583} />
          </GarageBottomItem>

          <GarageBottomItem>
            <PostButtonFunctions
              icon="comment"
              title="Комментарии"
              count={24}
            />
          </GarageBottomItem>

          <GarageBottomItem>
            <PostButtonFunctions icon="share" title="Поделиться" />
          </GarageBottomItem>
        </GarageBottomList>

        <PostButtonFunctions icon="saved" title="Сохранить" />
      </GarageBottomWrapper>

      <CharacterisiticsList title="Характеристики" />

      <GarageContentWrapper>
        <GarageCharcteristicTitle>Описание</GarageCharcteristicTitle>
        <GarageDescription>
          Описание — композиционная форма, которую используют в
          литературоведении и лингвистике для подробной характеристики предметов
          или явлений.
        </GarageDescription>
      </GarageContentWrapper>

      <GarageContentWrapper>
        <GarageCharcteristicTitle>Оценка</GarageCharcteristicTitle>

        <GarageMarkWrapper>
          <GarageMarkSubtitle>Оценка владельца:</GarageMarkSubtitle>
        </GarageMarkWrapper>

        <GarageMarkList>
          <GarageMarkItem $color="green">
            <SvgHelper iconName="plus" />
            <GarageDescription>
              Комфорт, скорость, удобство, внешний вид
            </GarageDescription>
          </GarageMarkItem>

          <GarageMarkItem $color="red">
            <SvgHelper iconName="minus" />
            <GarageDescription>Проходимость</GarageDescription>
          </GarageMarkItem>
        </GarageMarkList>
      </GarageContentWrapper>

      <CharacterisiticsList title="Статус" />

      <GarageTime>15 минут назад</GarageTime>

      <GarageButtonWrapper>
        <BlackWhiteButton size={40} color="black" title="Написать сообщение" />
      </GarageButtonWrapper>
    </GarageWrapper>
  );
};

import styled from "styled-components";
import {
  colors,
  device,
  shadows,
  transitions,
} from "@/common/styles/styleConstants";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { flexCenter } from "@/common/styles/mixins";
import { SearchInput } from "@/common/styles/tags/input/SearchInput";
import ModalPost from "@/modules/NewPost/ModalPost";
import { useState } from "react";
import { Logo } from "@/common/components/Logo";

const TopBarHeader = styled("header")`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 65px;
  transition: ${transitions.mediumTransition};
  background-color: ${colors.whiteTotal};
  box-shadow: ${shadows.defaultShadow};

  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;
  padding-inline: 50px;

  @media ${device.tablet} {
    padding-inline: 25px;
  }

  @media ${device.mobile} {
    height: 55px;
    padding-inline: 15px;
  }

  @media ${device.mobileM} {
    height: 50px;
    padding-inline: 10px;
  }
`;

const TopBarSearchWrapper = styled("div")`
  width: 400px;

  @media ${device.tablet} {
    width: 300px;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const TopBarList = styled("ul")`
  display: flex;
  align-items: center;
  column-gap: 25px;

  @media ${device.tablet} {
    column-gap: 15px;
  }

  @media ${device.mobile} {
    column-gap: 20px;
  }

  @media ${device.mobileM} {
    column-gap: 10px;
  }
`;

const TopBarItem = styled("li")`
  ${flexCenter}
`;

export const TopBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <TopBarHeader>
      <ModalPost isOpen={open} setOpen={setOpen}></ModalPost>

     <Logo />

      <TopBarSearchWrapper>
        <SearchInput />
      </TopBarSearchWrapper>

      <TopBarList>
        <TopBarItem onClick={() => setOpen(true)}>
          <ButtonWithIcon size={40} icon="create" title="Создать" />
        </TopBarItem>

        <TopBarItem>
          <ButtonWithIcon size={40} icon="bell" title="Уведомления" />
        </TopBarItem>
      </TopBarList>
    </TopBarHeader>
  );
};

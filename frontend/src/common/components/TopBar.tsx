import styled from "styled-components";
import {
  borders,
  colors,
  shadows,
  transitions,
} from "@/common/styles/styleConstants";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { hover } from "@/common/styles/mixins";

const TopBarHeader = styled("header")`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 75px;
  transition: ${transitions.mediumTransition};
  background-color: ${colors.whiteTotal};
  box-shadow: ${shadows.defaultShadow};

  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 50px;
  padding-inline: 50px;
`;

//TODO решить проблему с отображением логотипа
const TopBarLogo = styled(SvgHelper)`
  width: 150px;
  height: 30px;
  padding-inline: 0;
`;

const TopBarForm = styled("form")`
  position: relative;
`;

const TopBarInput = styled("input")`
  width: 400px;
  height: 40px;
  padding: 10px 73px 10px 25px;
  border: ${borders.borderGrayAccent};
  border-radius: ${borders.bigBorderRadius};
  background-color: transparent;
  font-size: 18px;

  &::placeholder {
    color: ${colors.grayAccent};
  }

  ${hover} {
    background-color: ${colors.grayBorder};
  }

  &:focus {
    border-color: ${colors.blackTotal};
    background-color: ${colors.grayBorder};
    outline: none;
  }
`;

const TopBarSearch = styled(SvgHelper)`
  position: absolute;
  top: 50%;
  right: 25px;
  z-index: 1;
  translate: 0 -50%;

  width: 23px;
  height: 23px;
  color: ${colors.grayAccent};
`;

const TopBarList = styled("ul")`
  display: flex;
  align-items: center;
  column-gap: 25px;
`;

const TopBarItem = styled("li")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopBar = () => {
  return (
    <TopBarHeader>
      <TopBarLogo iconName="logo" />

      <TopBarForm>
        <TopBarInput type="text" placeholder="Поиск" />
        <TopBarSearch iconName="search" />
      </TopBarForm>

      <TopBarList>
        <TopBarItem>
          <ButtonWithIcon size={40} icon="create" title="Создать" />
        </TopBarItem>

        <TopBarItem>
          <ButtonWithIcon size={40} icon="bell" title="Уведомления" />
        </TopBarItem>
      </TopBarList>
    </TopBarHeader>
  );
};

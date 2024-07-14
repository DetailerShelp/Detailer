import styled from "styled-components";
import {
  colors,
  device,
  shadows,
  transitions,
} from "@/common/styles/styleConstants";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { clampWidth, flexCenter } from "@/common/styles/mixins";
import { SearchInput } from "@/common/styles/tags/input/SearchInput";

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

  @media ${device.mobile} {
    height: 55px;
    column-gap: 25px;
    padding-inline: 25px;
  }
`;

//TODO решить проблему с отображением логотипа
const TopBarLogo = styled(SvgHelper)`
  ${clampWidth(100, 150)}
  height: 30px;
  padding-inline: 0;
`;

const TopBarList = styled("ul")`
  display: flex;
  align-items: center;
  column-gap: 25px;

  @media ${device.mobile} {
    column-gap: 15px;
  }
`;

const TopBarItem = styled("li")`
  ${flexCenter}
`;

export const TopBar = () => {
  return (
    <TopBarHeader>
      <TopBarLogo iconName="logo" />

      <SearchInput />

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

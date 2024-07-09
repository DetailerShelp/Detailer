import styled from "styled-components";
import { borders, colors, shadows } from "@/common/styles/styleConstants";
import { NavLink } from "react-router-dom";
import SvgHelper from "@/common/svg-helper/SvgHelper";

const NavigationPanel = styled("nav")`
  width: 100%;
  max-width: 300px;
  background-color: ${colors.whiteTotal};
  border: ${borders.defaultBorder};
  border-radius: ${borders.defaultBorderRadius};
  box-shadow: ${shadows.defaultShadow};
`;

const NavigationList = styled("ul")`
  display: flex;
  flex-direction: column;
`;

const NavigationItem = styled("li")`
  width: 100%;

  &:not(:last-child) {
    border-bottom: ${borders.defaultBorder};
  }
`;

const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 15px;
  padding-inline: 25px;
  height: 50px;
  border-radius: ${borders.defaultBorderRadius};

  font-size: 18px;
  text-decoration: none;
  color: ${colors.grayText};

  &.active {
    color: ${colors.blackTotal};
  }

  &:hover {
    background-color: ${colors.whiteBackground};
  }

  &:active {
    background-color: ${colors.grayBorder};
  }
`;

const NavigationLogo = styled(SvgHelper)`
  width: 25px;
  height: 25px;
`;

export const NavPanel = () => {
  return (
    <NavigationPanel>
      <NavigationList>
        <NavigationItem>
          <NavigationLink to={"profile"}>
            <SvgHelper iconName="profile" />
            Профиль
          </NavigationLink>
        </NavigationItem>

        <NavigationItem>
          <NavigationLink to={"home"}>
            <SvgHelper iconName="home" />
            Главная
          </NavigationLink>
        </NavigationItem>

        <NavigationItem>
          <NavigationLink to={"messenger"}>
            <NavigationLogo iconName="messenger" />
            Мессенджер
          </NavigationLink>
        </NavigationItem>

        <NavigationItem>
          <NavigationLink to={"shorts"}>
            <SvgHelper iconName="shorts" />
            Шортсы
          </NavigationLink>
        </NavigationItem>

        <NavigationItem>
          <NavigationLink to={"saved"}>
            <NavigationLogo iconName="saved" />
            Сохраненное
          </NavigationLink>
        </NavigationItem>

        <NavigationItem>
          <NavigationLink to={"qrcode"}>
            <NavigationLogo iconName="qrcode" />
            QR-code
          </NavigationLink>
        </NavigationItem>

        <NavigationItem>
          <NavigationLink to={"settings"}>
            <NavigationLogo iconName="settings" />
            Настройки
          </NavigationLink>
        </NavigationItem>

        <NavigationItem>
          <NavigationLink to={"help"}>
            <NavigationLogo iconName="help" />
            Поддержка
          </NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationPanel>
  );
};

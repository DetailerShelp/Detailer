import styled from "styled-components";
import {
  colors,
  device,
  shadows,
  transitions,
} from "@/common/styles/styleConstants";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { flexCenter, resetLink } from "@/common/styles/mixins";
import { SearchInput } from "@/common/styles/tags/input/SearchInput";
import ModalPost from "@/modules/NewPost/ModalPost";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";

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

const TopBarLogoLink = styled(NavLink)`
  ${resetLink}
  ${flexCenter}
  margin-bottom: 3px;
`;

const TopBarLogoTitle = styled("h1")`
  width: 132px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;
`;

const TopBarLogoWrapper = styled("div")`
  ${flexCenter}
  position: absolute;
  left: 0;
  top: 50%;
  translate: 0 -50%;
  z-index: 1;
  width: 30px;
  height: 30px;
`;

const TopBarLogoIconCap = styled(SvgHelper)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 6.95px;
  height: 18.75px;
  color: ${colors.blackThumb};
`;

const TopBarLogoIcon = styled(SvgHelper)`
  width: 30px;
  height: 30px;
`;

const TopBarLogoText = styled(SvgHelper)<{ $color: string | null }>`
  margin-top: 5px;
  width: 100px;
  height: 25px;
  color: ${(props) =>
    props.$color === "light" ? `${colors.blackThumb}` : `${colors.blackTotal}`};
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
  const theme = localStorage.getItem("theme") || "light";

  return (
    <TopBarHeader>
      <ModalPost isOpen={open} setOpen={setOpen}></ModalPost>

      <TopBarLogoLink to="/home">
        <TopBarLogoTitle>
          <VisuallyHidden>Detailer</VisuallyHidden>
          <TopBarLogoWrapper>
            {theme === "light" && <TopBarLogoIconCap iconName="lightCapLogo" />}
            <TopBarLogoIcon
              iconName={theme === "light" ? "lightLogo" : "darkLogo"}
            />
          </TopBarLogoWrapper>
          <TopBarLogoText iconName="nameLogo" $color={theme} />
        </TopBarLogoTitle>
      </TopBarLogoLink>

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

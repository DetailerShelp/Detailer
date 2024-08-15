import styled from "styled-components";
import { colors } from "@/common/styles/styleConstants";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { flexCenter, resetLink } from "@/common/styles/mixins";
import { NavLink } from "react-router-dom";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";

const LogoLink = styled(NavLink)<{ $size?: string }>`
  ${resetLink}
  ${flexCenter}
  margin-bottom: 3px;
  transform: ${(props) => props.$size === "big" && "scale(2)"};
`;

const LogoTitle = styled("h1")`
  width: 132px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;
`;

const LogoWrapper = styled("div")`
  ${flexCenter}
  position: absolute;
  left: 0;
  top: 50%;
  translate: 0 -50%;
  z-index: 1;
  width: 30px;
  height: 30px;
`;

const LogoIconCap = styled(SvgHelper)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 6.95px;
  height: 18.75px;
  color: ${colors.blackThumb};
`;

const LogoIcon = styled(SvgHelper)`
  width: 30px;
  height: 30px;
`;

const LogoText = styled(SvgHelper)<{ $color: string | null }>`
  margin-top: 5px;
  width: 100px;
  height: 25px;
  color: ${(props) =>
    props.$color === "light" ? `${colors.blackThumb}` : `${colors.blackTotal}`};
`;

interface LogoProps {
  size?: string;
}

export const Logo = ({ size }: LogoProps) => {
  const theme = localStorage.getItem("theme") || "light";

  return (
    <LogoLink to="/home" $size={size}>
      <LogoTitle>
        <VisuallyHidden>Detailer</VisuallyHidden>
        <LogoWrapper>
          {theme === "light" && <LogoIconCap iconName="lightCapLogo" />}
          <LogoIcon iconName={theme === "light" ? "lightLogo" : "darkLogo"} />
        </LogoWrapper>
        <LogoText iconName="nameLogo" $color={theme} />
      </LogoTitle>
    </LogoLink>
  );
};

import {
  clampText,
  flexCenter,
  hoverActive,
  resetButton,
  square,
} from "@/common/styles/mixins";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import styled from "styled-components";

const ProfileButton = styled("button")`
  ${resetButton}
  width: 100%;
  padding: 10px 25px;
  margin-block: 5px;
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
  ${flexCenter}
  color: ${colors.grayText};
  border-radius: ${borders.defaultBorderRadius};
  column-gap: 10px;

  @media ${device.tablet} {
    padding-inline: 20px;
  }

  @media ${device.mobileL} {
    padding: 5px 15px;
    margin-block: 3px;
  }

  ${hoverActive}
`;

const ProfileIcon = styled(SvgHelper)`
  ${square(30)}
`;

interface ProfileCreatePublicationProps {
  title: string;
  click: () => void;
}
export const ProfileCreatePublication = ({
  title,
  click,
}: ProfileCreatePublicationProps) => {
  return (
    <ProfileButton onClick={click}>
      <ProfileIcon iconName="plus" />
      {title}
    </ProfileButton>
  );
};

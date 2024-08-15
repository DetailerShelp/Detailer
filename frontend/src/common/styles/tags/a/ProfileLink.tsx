import { Link } from "react-router-dom";
import styled from "styled-components";
import { borders, device, fonts } from "@/common/styles/styleConstants";
import {
  clampText,
  hoverActive,
  resetLink,
  square,
} from "@/common/styles/mixins";
import { ShortUserInfo } from "@/store/reducers/user/types";

const defaultAvatar = "/images/avatar.svg";

const ProfileLinkTo = styled(Link)`
  ${resetLink}
  display: flex;
  align-items: center;
  column-gap: 15px;
  border-radius: ${borders.defaultBorderRadius};
  padding-right: 10px;

  @media ${device.tablet} {
    column-gap: 10px;
  }

  @media ${device.mobileM} {
    column-gap: 15px;
  }

  ${hoverActive}
`;

const ProfileAvatar = styled("img")`
  ${square(40)}
  border-radius: ${borders.circleBorderRadius};

  @media ${device.mobileM} {
    ${square(35)}
  }
`;

const ProfileName = styled("p")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
`;

interface ProfileLinkProps {
  user?: ShortUserInfo;
}

export const ProfileLink = ({ user }: ProfileLinkProps) => {
  return (
    <ProfileLinkTo to={`/profile/${user?.id}`}>
      <ProfileAvatar
        src={!!user?.avatarImg ? user?.avatarImg : defaultAvatar}
        alt={`${user?.id}'s avatar`}
      />
      <ProfileName>{user?.username}</ProfileName>
    </ProfileLinkTo>
  );
};

import { clampText, flexCenter } from "@/common/styles/mixins";
import { colors, fonts } from "@/common/styles/styleConstants";
import { ImageComponentsTypes } from "@/common/svg-helper";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import styled from "styled-components";

const ProfileWrapper = styled("div")`
  width: 100%;
  margin-block: 25px;
  ${flexCenter}
  flex-direction: column;
  row-gap: 5px;
  color: ${colors.grayBorder};
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  text-align: center;
`;

const ProfileIcon = styled(SvgHelper)`
  width: 40px;
  height: 40px;
`;

interface ProfileEmptyPublicationProps {
  title: string;
  icon: ImageComponentsTypes;
}

export const ProfileEmptyPublication = ({
  title,
  icon,
}: ProfileEmptyPublicationProps) => {
  return (
    <ProfileWrapper>
      <ProfileIcon iconName={icon} />
      <p>{title}</p>
    </ProfileWrapper>
  );
};

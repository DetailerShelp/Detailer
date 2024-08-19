import {
  EditProfileBackgroundWrapper,
  EditProfileButtonWrapper,
  EditProfileContent,
  EditProfileHeader,
  EditProfileUserDescriptionWrapper,
  EditProfileUserHeaderWrapper,
  EditProfileWrapper,
} from "@/modules/user/profile/pages/edit-profile/styles";
import {
  LoadingCircle,
  LoadingSubtitle,
  LoadingTitle,
} from "@/common/components/loading/styles";
import styled from "styled-components";
import { loadingGradient, square } from "@/common/styles/mixins";
import { borders, device } from "@/common/styles/styleConstants";
import {
  ProfileBackgroungImageWrapper,
  ProfileUserAvatarWrapper,
} from "@/modules/user/profile/components/styles";
import { MultipleInputLoading } from "@/common/components/loading/MultipleInputLoading";

const BackgroundImage = styled(ProfileBackgroungImageWrapper)`
  ${loadingGradient};
  border-radius: ${borders.defaultBorderRadius};
  position: relative;

  width: 100%;
`;

const Button = styled(EditProfileButtonWrapper)`
  ${square(35)}
  border-radius: ${borders.circleBorderRadius};
`;

const UserAvatar = styled(ProfileUserAvatarWrapper)`
  ${loadingGradient};
`;

const UserName = styled("div")`
  margin-block: auto 15px;

  @media ${device.tablet} {
    margin-block: auto 5px;
  }
`;

export const EditLoading = () => {
  return (
    <EditProfileWrapper>
      <EditProfileHeader>
        <LoadingCircle $size={30} />
        <LoadingTitle />
        <LoadingCircle $size={30} />
      </EditProfileHeader>
      <EditProfileContent>
        <EditProfileBackgroundWrapper>
          <Button $position="left" />

          <BackgroundImage />
          <Button $position="right" />

          <EditProfileUserHeaderWrapper>
            <UserAvatar />

            <UserName>
              <LoadingSubtitle />
            </UserName>
          </EditProfileUserHeaderWrapper>
        </EditProfileBackgroundWrapper>

        <EditProfileUserDescriptionWrapper>
          <MultipleInputLoading />
        </EditProfileUserDescriptionWrapper>
      </EditProfileContent>
    </EditProfileWrapper>
  );
};
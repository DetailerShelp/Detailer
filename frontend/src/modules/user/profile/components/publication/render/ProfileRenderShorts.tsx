import { ShortShortsInfo } from "@/store/reducers/shorts/types";
import {
  ProfilePostImage,
  ProfilePostLink,
  ProfilePostList,
  ProfileShortsItem,
} from "@/modules/user/profile/components/publication/render/styles";
import styled from "styled-components";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { colors, device } from "@/common/styles/styleConstants";

const ProfileShortsIcon = styled(SvgHelper)`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 1;

  color: ${colors.white};

  @media ${device.mobileL} {
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
  }
`;

interface ProfileRenderShortsProps {
  shorts?: ShortShortsInfo[];
}

export const ProfileRenderShorts = ({ shorts }: ProfileRenderShortsProps) => {
  return (
    <>
      {!!shorts && (
        <ProfilePostList>
          {shorts?.map((item) => (
            <ProfileShortsItem key={item.id}>
              <ProfilePostLink>
                <ProfileShortsIcon iconName="shorts" />
                <ProfilePostImage src={item.img} />
              </ProfilePostLink>
            </ProfileShortsItem>
          ))}
        </ProfilePostList>
      )}
    </>
  );
};

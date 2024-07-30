import { borders, device } from "@/common/styles/styleConstants";
import styled from "styled-components";

const ProfileShortsList = styled("ul")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;

  @media ${device.mobileL} {
    gap: 3px;
  }
`;

const ProfileShortsItem = styled("li")`
  width: 100%;
  max-width: 178px;
  aspect-ratio: 1;
`;

const ProfileShortsLink = styled("a")``;

const ProfileShortsImage = styled("img")`
  width: 100%;
  aspect-ratio: 0.5;
  object-fit: cover;
  object-position: center;
  border-radius: ${borders.smallBorderRadius};
`;

export const ProfileShorts = () => {
  return (
    <ProfileShortsList>
      <ProfileShortsItem>
        <ProfileShortsLink>
          <ProfileShortsImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6yT7oBWFeKJH-85mTe_LX8XL5RXw1mRFow&s" />
        </ProfileShortsLink>
      </ProfileShortsItem>
    </ProfileShortsList>
  );
};

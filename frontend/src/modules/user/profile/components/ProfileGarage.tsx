import ModalPost from "@/modules/NewPost/ModalPost";
import { useState } from "react";
import styled from "styled-components";
import { ProfileCreatePublication } from "@/modules/user/profile/components/ProfileCreatePublication";
import { ProfileEmptyPublication } from "@/modules/user/profile/components/ProfileEmptyPublication";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";
import {
  clampText,
  clampWidth,
  flexCenter,
  hoverActive,
  square,
} from "@/common/styles/mixins";
import { ShortAutoInfo } from "@/store/reducers/auto/types";
import SvgHelper from "@/common/svg-helper/SvgHelper";

const ProfileGarageList = styled("ul")`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const ProfileGarageItem = styled("li")`
  width: 100%;

  &:not(:last-child) {
    border-bottom: ${borders.defaultBorder};
  }
`;

const ProfileGarageLink = styled("a")`
  width: 100%;
  padding: 15px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;
  border-radius: ${borders.defaultBorderRadius};
  ${hoverActive}

  @media ${device.tablet} {
    padding: 10px 20px;
  }

  @media ${device.mobileL} {
    padding-inline: 5px 15px;
  }
`;

const ProfileGarageContentWrapper = styled("div")`
  ${flexCenter}
  column-gap: 15px;
`;

const ProfileGarageImage = styled("img")`
  ${square(70)}
  object-fit: cover;
  object-position: center;
  border-radius: ${borders.thinBorderRadius};
`;

const ProfileGarageDescriptionWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  column-gap: 5px;
  text-align: left;

  ${clampWidth(160, 400)}
`;

const ProfileGarageTitle = styled("h3")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.blackTotal};

  & span {
    color: ${colors.grayAccent};

    @media ${device.mobileL} {
      display: none;
    }
  }

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProfileGarageDescription = styled("p")`
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  color: ${colors.grayAccent};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProfileGarageStatus = styled("p")<{ color: string }>`
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.medium};
  color: ${(props) => (props.color === "red" ? colors.red : colors.green)};
`;

const ProfileGarageIcon = styled(SvgHelper)`
  color: ${colors.blackTotal};
`;

interface ProfileGarageProps {
  garage?: ShortAutoInfo[];
  isAuthorizedUser: boolean | undefined;
}

export const ProfileGarage = ({
  garage,
  isAuthorizedUser,
}: ProfileGarageProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* //TODO navigation in ModalPost */}
      <ModalPost isOpen={open} setOpen={setOpen} />
      {isAuthorizedUser && (
        <ProfileCreatePublication
          title="Добавить автомобиль"
          click={() => setOpen(true)}
        />
      )}

      {garage?.length !== 0 ? (
        <ProfileGarageList>
          {garage?.map((item) => (
            <ProfileGarageItem>
              <ProfileGarageLink>
                <ProfileGarageContentWrapper>
                  <ProfileGarageImage src={item.img} />

                  <ProfileGarageDescriptionWrapper>
                    <ProfileGarageTitle>
                      {item.name}{" "}
                      <>{!!item.shortName && <span>({item.shortName})</span>}</>
                    </ProfileGarageTitle>

                    <ProfileGarageDescription>
                      {item.description}
                    </ProfileGarageDescription>

                    <ProfileGarageStatus
                      color={item.status === "Владеет" ? "green" : "red"}
                    >
                      {item.status}
                    </ProfileGarageStatus>
                  </ProfileGarageDescriptionWrapper>
                </ProfileGarageContentWrapper>

                <ProfileGarageIcon iconName="arrowRight" />
              </ProfileGarageLink>
            </ProfileGarageItem>
          ))}
        </ProfileGarageList>
      ) : (
        <ProfileEmptyPublication title="Нет автомобилей" icon="garage" />
      )}
    </>
  );
};

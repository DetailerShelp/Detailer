import { ShortAutoInfo } from "@/store/reducers/auto/types";
import {
  ProfileGarageContentWrapper,
  ProfileGarageDescription,
  ProfileGarageDescriptionWrapper,
  ProfileGarageImage,
  ProfileGarageItem,
  ProfileGarageLink,
  ProfileGarageList,
  ProfileGarageStatus,
  ProfileGarageTitle,
} from "@/modules/user/profile/components/publication/render/styles";
import styled from "styled-components";
import SvgHelper from "@/common/svg-helper/SvgHelper";

const ProfileGarageIcon = styled(SvgHelper)``;

interface ProfileRenderGarageProps {
  garage?: ShortAutoInfo[];
}

export const ProfileRenderGarage = ({ garage }: ProfileRenderGarageProps) => {
  return (
    <>
      {!!garage && (
        <ProfileGarageList>
          {garage?.map((item) => (
            <ProfileGarageItem key={item.id}>
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
      )}
    </>
  );
};

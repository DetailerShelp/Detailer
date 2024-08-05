import { flexCenter } from "@/common/styles/mixins";
import { borders, device, fonts } from "@/common/styles/styleConstants";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { authorizedUser } from "@/store/reducers/user/authorizedUser";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageHeader = styled("header")`
  ${flexCenter}
  width: 100%;
  height: 50px;
  border-bottom: ${borders.defaultBorder};
  position: relative;

  @media ${device.mobile} {
    width: clamp(308px, 91.33vw, 548px);
  }
`;

const PageHeaderButtonWrapper = styled("div")`
  position: absolute;
  top: 50%;
  left: 25px;
  translate: 0 -50%;
  ${flexCenter}

  @media ${device.mobileL} {
    left: 15px;
  }
`;

const PageTitle = styled("h2")`
  text-align: center;
  font-size: ${(fonts.sizes.titleMobile, fonts.sizes.title)};
  font-weight: ${fonts.weights.semiBold};
`;

interface PageHeaderContentProps {
  title: string;
}

export const PageHeaderContent: FC<PageHeaderContentProps> = ({ title }) => {
  const navigate = useNavigate();
  const userId = authorizedUser();
  return (
    <PageHeader>
      <PageHeaderButtonWrapper>
        <ButtonWithIcon
          size={35}
          title="Назад"
          icon="arrowLeft"
          click={() => navigate(`/profile/${userId}`)}
        />
      </PageHeaderButtonWrapper>
      <PageTitle>{title}</PageTitle>
    </PageHeader>
  );
};

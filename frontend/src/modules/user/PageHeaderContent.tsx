import { flexCenter, square } from "@/common/styles/mixins";
import { borders, device, fonts } from "@/common/styles/styleConstants";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { FC } from "react";
import styled from "styled-components";

const PageHeader = styled("header")`
  ${flexCenter}
  width: 100%;
  height: 50px;
  border-bottom: ${borders.defaultBorder};
  position: relative;

  @media ${device.mobile} {
    width: clamp(300px, 89vw, 548px);
  }
`;

const PageHeaderButtonWrapper = styled("div")`
  position: absolute;
  top: 50%;
  left: 25px;
  translate: 0 -50%;
  ${flexCenter}
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
  return (
    <PageHeader>
        {/* //TODO добавить кнопке onClick=(вернуться назад по routeName) */}
      <PageHeaderButtonWrapper>
        <ButtonWithIcon size={35} title="Назад" icon="arrowLeft" />
      </PageHeaderButtonWrapper>
      <PageTitle>{title}</PageTitle>
    </PageHeader>
  );
};

import { device } from "@/common/styles/styleConstants";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { useToast } from "@/common/toast/toast-contex";
import { defaultError } from "@/common/toast/toastsMessages/defaultToasts";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "@/common/components/Logo";
import { ErrorBrakeDisk } from "@/common/components/error/ErrorBrakeDisk";
import { ErrorPageDescription, ErrorPageTextWrapper, ErrorPageWrapper } from "@/common/components/error/styles";

const Icon = styled(SvgHelper)`
  width: 150px;
  height: 150px;

  @media ${device.mobile} {
    width: 125px;
    height: 125px;
  }

  @media ${device.mobileL} {
    width: 100px;
    height: 100px;
  }

  @media ${device.mobileM} {
    width: 75px;
    height: 75px;
  }
`;

export const ErrorPage = () => {
  const navigate = useNavigate();
  const toast = useToast();

  return (
    <>
      {toast?.error(defaultError)}
        <ErrorPageWrapper>
          <Logo size="big" />
          <ErrorPageTextWrapper>
            <Icon iconName="four" />
            <ErrorBrakeDisk size={200} />
            <Icon iconName="four" />
          </ErrorPageTextWrapper>
          <ErrorPageDescription>Такой страницы не существует</ErrorPageDescription>
          <BlackWhiteButton
            color="white"
            size={50}
            title="Вернуться на главную"
            click={() => navigate("/home")}
          />
        </ErrorPageWrapper>
    </>
  );
};

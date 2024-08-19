import { device } from "@/common/styles/styleConstants";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { useToast } from "@/common/toast/toast-contex";
import { defaultError } from "@/common/toast/toastsMessages/defaultToasts";
import styled from "styled-components";
import { ErrorBrakeDisk } from "@/common/components/error/ErrorBrakeDisk";
import {
  ErrorPageDescription,
  ErrorPageTextWrapper,
  ErrorPageWrapper,
} from "@/common/components/error/styles";

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

export const ErrorInternetPage = () => {
  const toast = useToast();

  return (
    <>
      {toast?.error(defaultError)}
      <ErrorPageWrapper>
        <ErrorPageTextWrapper>
          <Icon iconName="four" />
          <ErrorBrakeDisk size={200} />
          <Icon iconName="zero" />
        </ErrorPageTextWrapper>
        <ErrorPageDescription>
          Отсутствует подключение к интернету
        </ErrorPageDescription>
        <BlackWhiteButton
          color="white"
          size={50}
          title="Перезагрузить страницу"
          click={() => document.location.reload()}
        />
      </ErrorPageWrapper>
    </>
  );
};

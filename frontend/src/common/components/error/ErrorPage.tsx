import { clampText, flexCenter } from "@/common/styles/mixins";
import { colors, device, fonts } from "@/common/styles/styleConstants";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { useToast } from "@/common/toast/toast-contex";
import { defaultError } from "@/common/toast/toastsMessages/defaultToasts";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "@/common/components/Logo";
import { ErrorBrakeDisk } from "@/common/components/error/ErrorBrakeDisk";

const Section = styled("section")`
  ${flexCenter}
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled("div")`
  ${flexCenter}
  flex-direction: column;
  row-gap: 25px;
  color: ${colors.blackTotal};
  padding-inline: 15px;

  @media ${device.mobile} {
    row-gap: 20px;
  }

  @media ${device.mobileL} {
    row-gap: 15px;
  }

  @media ${device.mobileM} {
    row-gap: 10px;
    padding-inline: 10px;
  }
`;

const TextWrapper = styled("div")`
  ${flexCenter}
  user-select: none;
`;

const Description = styled("p")`
  ${clampText(fonts.sizes.titleMobile, fonts.sizes.titleModal)}
  font-weight: ${fonts.weights.medium};
  text-transform: uppercase;
  text-align: center;
`;

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
      <Section>
        <Wrapper>
          <Logo size="big" />
          <TextWrapper>
            <Icon iconName="four" />
            <ErrorBrakeDisk size={200} />
            <Icon iconName="four" />
          </TextWrapper>
          <Description>Такой страницы не существует</Description>
          <BlackWhiteButton
            color="white"
            size={50}
            title="Вернуться на главную"
            click={() => navigate("/home")}
          />
        </Wrapper>
      </Section>
    </>
  );
};

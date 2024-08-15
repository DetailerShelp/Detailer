import { borders, device } from "@/common/styles/styleConstants";
import styled from "styled-components";
import { LoadingCircle } from "@/common/components/loading/styles";
import { loadingGradient } from "@/common/styles/mixins";

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  column-gap: 15px;
  border-radius: ${borders.defaultBorderRadius};
  padding-right: 10px;

  @media ${device.tablet} {
    column-gap: 10px;
  }

  @media ${device.mobileM} {
    column-gap: 15px;
  }
`;

const Text = styled("p")`
  width: 100px;
  height: 18px;
  border-radius: ${borders.mediaBorderRadius};
  ${loadingGradient}
`;

export const ShortProfileInfoLoading = () => {
  return (
    <Wrapper>
      <LoadingCircle $size={35} />
      <Text />
    </Wrapper>
  );
};

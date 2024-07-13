import { TopBar } from "@/common/components/TopBar";
import { NavPanel } from "@/common/components/navpanel/NavPanel";
import { Container } from "@/common/styles/GlobalStyles";
import styled from "styled-components";

const Wrapper = styled("div")`
  margin-top: 75px;
  padding-top: 25px;
`;

const WrapperInner = styled("div")`
  display: grid;
  grid-template-areas:
    "a b c"
    "a b d";
  gap: 25px;
`;

const NavigationWrapper = styled("div")`
  grid-area: "a";
  position: fixed;
  width: 100%;
  max-width: 300px;
`;

export const PageWrapper = () => {
  return (
    <>
    <TopBar />

    <Wrapper>
      <Container>
        <WrapperInner>
            <NavigationWrapper>
                <NavPanel />
            </NavigationWrapper>
        </WrapperInner>
      </Container>
    </Wrapper>
    </>
  );
};

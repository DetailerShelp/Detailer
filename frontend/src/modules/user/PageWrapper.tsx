import { TopBar } from "@/common/components/TopBar";
import { NavPanel } from "@/common/components/navpanel/NavPanel";
import { Container } from "@/common/styles/GlobalStyles";
import { clampWidth } from "@/common/styles/mixins";
import { device } from "@/common/styles/styleConstants";
import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled("body")`
  margin-top: 65px;
  padding-top: 25px;

  display: flex;
  justify-content: space-between;
`;

const WrapperInner = styled("div")`
  width: 100%;
  display: grid;
  grid-template-areas: "a b c";
  gap: 25px;

  @media ${device.tablet} {
    grid-template-areas: "a b";
  }
`;

const NavigationWrapper = styled("div")`
  grid-area: "a";
  width: 300px;
`;

const FixedWrapper = styled("div")`
  width: 100%;
  position: fixed;
  display: grid;
  row-gap: 25px;
`;

const ContentWrapper = styled("div")`
  ${clampWidth(475, 550 )}
  grid-area: "b";
`;

const WidgetsWrapper = styled("div")`
  grid-area: "c";
  width: 324px;

  @media ${device.tablet} {
    width: 300px;
    grid-area: "a";
    display: grid;
    row-gap: 25px;
  }
`;

interface PageProps {
  content: React.ReactNode;
  widgetOne: React.ReactNode;
  widgetTwo: React.ReactNode;
  widgetThree?: React.ReactNode;
  widgetFour?: React.ReactNode;
}

export const PageWrapper: FC<PageProps> = ({
  content,
  widgetOne,
  widgetTwo,
  widgetThree,
  widgetFour,
}) => {
  return (
    <>
      <TopBar />

      <Wrapper>
        <Container>
          <WrapperInner>
            <NavigationWrapper>
              <FixedWrapper>
                <NavPanel />
              </FixedWrapper>
            </NavigationWrapper>
            <ContentWrapper>{content}</ContentWrapper>

            <WidgetsWrapper>
              <FixedWrapper>
                {widgetOne}
                {widgetTwo}
                {widgetThree}
                {widgetFour}
              </FixedWrapper>
            </WidgetsWrapper>
          </WrapperInner>
        </Container>
      </Wrapper>
    </>
  );
};

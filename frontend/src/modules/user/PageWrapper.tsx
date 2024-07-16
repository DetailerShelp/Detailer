import { TopBar } from "@/common/components/TopBar";
import { NavPanel } from "@/common/components/navpanel/NavPanel";
import { Container } from "@/common/styles/GlobalStyles";
import { clampWidth } from "@/common/styles/mixins";
import { device } from "@/common/styles/styleConstants";
import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled("div")`
  margin-top: 65px;
  padding-top: 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.mobile} {
    margin-top: 55px;
  }
`;

const WrapperInner = styled("div")`
  width: 100%;
  display: grid;
  gap: 25px;

  @media ${device.tabletAbove} {
    grid-template-areas: "a b c";
  }

  @media ${device.tablet} {
    grid-template-areas:
      "a b";
      /* "c ."; */
  }

  @media ${device.mobile} {
    display: flex;
  }
`;

const NavigationWrapper = styled("div")`
  ${clampWidth(200, 300)}
  grid-area: "a";

  @media ${device.tablet} {
    width: clamp(230px, 29.3vw, 300px);
  }

  @media ${device.mobile} {
    position: absolute;
    bottom: 0;
    left: 0;

  }
`;

const ContentWrapper = styled("div")`
  ${clampWidth(450, 550)}
  max-width: 550px;
  grid-area: "b";
  background-color: white;
  box-shadow: 0 0 5px 0 black;

  @media ${device.mobile} {
    height: 300px;
  }
`;

const WidgetsWrapper = styled("div")`
  ${clampWidth(295, 324)}
  grid-area: "c";

  @media ${device.tablet} {
    grid-area: "a";
  }
`;

const FixedWrapper = styled("div")`
  position: fixed;
  display: grid;
  row-gap: 25px;

  @media ${device.tablet} {
    position: relative
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
  const screenWidth = window.innerWidth;
  return (
    <>
      <TopBar />

      <Wrapper>
        <Container>
          <WrapperInner>
            <NavigationWrapper>
              <FixedWrapper>
                <NavPanel />
                {screenWidth.toString() <= device.tablet && (
                  <>
                    {widgetOne}
                    {widgetTwo}
                    {widgetThree}
                    {widgetFour}
                  </>
                )}
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

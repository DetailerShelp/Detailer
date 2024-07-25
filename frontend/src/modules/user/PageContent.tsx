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
    margin-block: 55px;
    padding-top: 15px;
    height: 100%;
  }

  @media ${device.mobileM} {
    margin-block: 50px;
    padding-top: 10px;
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
    grid-template-areas: "a b";
    gap: 20px;
  }

  @media ${device.mobile} {
    grid-template-areas: "b";
    gap: 0;
  }
`;

const NavigationWrapper = styled("div")`
  ${clampWidth(200, 300)}
  grid-area: "a";

  @media ${device.tablet} {
    width: clamp(230px, 29.3vw, 300px);
  }

  @media ${device.mobile} {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const ContentWrapper = styled("div")`
  ${clampWidth(450, 550)}
  max-width: 550px;
  grid-area: "b";

  @media ${device.mobile} {
    width: 100%;
  }
`;

const WidgetsWrapper = styled("div")`
  ${clampWidth(295, 324)}
  grid-area: "c";

  @media ${device.tablet} {
    display: none;
  }
`;

const FixedWrapper = styled("div")`
  position: fixed;
  display: grid;
  row-gap: 25px;
  z-index: 10;
  
  @media ${device.mobile} {
    width: 100%;
    bottom: 0px;
  }
`;

interface PageProps {
  content: React.ReactNode;
  widgetOne: React.ReactNode;
  widgetTwo: React.ReactNode;
  widgetThree?: React.ReactNode;
  widgetFour?: React.ReactNode;
}

export const PageContent: FC<PageProps> = ({
    content,
    widgetOne,
    widgetTwo,
    widgetThree,
    widgetFour,
  }) => {
  return (
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
  )
}

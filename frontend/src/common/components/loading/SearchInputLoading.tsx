import styled from "styled-components";
import { borders, device } from "@/common/styles/styleConstants";
import { LoadingCircle, LoadingDescription } from "./styles";

const SearchInputWrapper = styled("div")`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 10px 73px 10px 25px;
  border: ${borders.borderGrayAccent};
  border-radius: ${borders.bigBorderRadius};
  background-color: transparent;

  @media ${device.tablet} {
    padding-inline: 15px 45px;
  }
`;

const SearchTextWrapper = styled("div")`
  position: absolute;
  top: 50%;
  left: 25px;
  z-index: 1;
  translate: 0 -50%;
  width: 35%;

  @media ${device.tablet} {
    left: 15px;
  }
`;

const SearchIconWrapper = styled("div")`
  position: absolute;
  top: 50%;
  right: 25px;
  z-index: 1;
  translate: 0 -50%;

  @media ${device.tablet} {
    right: 15px;
  }
`;

export const SearchInputLoading = () => {
  return (
    <SearchInputWrapper>
      <SearchTextWrapper>
        <LoadingDescription />
      </SearchTextWrapper>
      <SearchIconWrapper>
        <LoadingCircle $size={25} />
      </SearchIconWrapper>
    </SearchInputWrapper>
  );
};

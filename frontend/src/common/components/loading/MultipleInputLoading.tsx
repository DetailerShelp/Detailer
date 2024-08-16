import { borders } from "@/common/styles/styleConstants";
import styled from "styled-components";
import { LoadingDescription } from "./styles";

const MultipleWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  height: 215px;
  padding: 15px;
  border: ${borders.borderGrayAccent};
  border-radius: ${borders.defaultBorderRadius};
  background-color: transparent;
`;

export const MultipleInputLoading = () => {
  return (
    <MultipleWrapper>
      <LoadingDescription />
      <LoadingDescription />
      <LoadingDescription />
    </MultipleWrapper>
  );
};

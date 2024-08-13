import styled from "styled-components";
import {
  borders,
  colors,
  fonts,
  transitions,
} from "@/common/styles/styleConstants";
import { clampText } from "@/common/styles/mixins";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";
import { FC, useState } from "react";

const MultipleForm = styled("form")`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const MultipleLabel = styled("label")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  margin-inline: 20px;
`;

const MultipleWrapper = styled("div")<{ isFocus: boolean }>`
  width: 100%;
  height: 215px;
  padding: 15px 15px;
  border: ${borders.borderGrayAccent};
  border-radius: ${borders.defaultBorderRadius};
  background-color: ${(props) =>
    props.isFocus ? colors.whiteBackground : "transparent"};
  border-color: ${(props) =>
    props.isFocus ? colors.blackTotal : colors.grayAccent};
  transition: ${transitions.fastTransition};

  &:hover {
    background-color: ${colors.whiteBackground};
  }
`;

const MultipleTextarea = styled("textarea")`
  width: 100%;
  height: 100%;
  padding-inline: 10px;
  background-color: transparent;
  border: none;
  color: ${colors.blackTotal};
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  resize: none;
  overflow-y: auto;
  outline: none;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::placeholder {
    color: ${colors.grayAccent};
  }
`;

interface MultipleInputProps {
  key: string;
  placeholder: string;
  title?: string;
}

export const MultipleInput: FC<MultipleInputProps> = ({
  key,
  placeholder,
  title,
}) => {
  const [isFocus, setFocus] = useState(false);
  return (
    <MultipleForm>
      {!!title ? (
        <MultipleLabel htmlFor={key}>{title}</MultipleLabel>
      ) : (
        <VisuallyHidden>
          <label htmlFor={key}>{placeholder}</label>
        </VisuallyHidden>
      )}
      <MultipleWrapper isFocus={isFocus}>
        <MultipleTextarea
          id={key}
          name={key}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </MultipleWrapper>
    </MultipleForm>
  );
};

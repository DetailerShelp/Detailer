import styled from "styled-components";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";
import { clampText, inputHoverActive } from "@/common/styles/mixins";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";
import { FC } from "react";

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

//TODO решить проблему с отображением скроллбара
const MultipleTextarea = styled("textarea")`
  width: 100%;
  height: 215px;
  padding: 15px 20px;
  border: ${borders.borderGrayAccent};
  border-radius: ${borders.defaultBorderRadius};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;  
  color: ${colors.blackTotal};
  background-color: transparent;
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  resize: none;
  overflow-y: scroll;

  &::placeholder {
    color: ${colors.grayAccent};
  }

  &:focus {
    border-color: ${colors.blackTotal};
    background-color: ${colors.whiteBackground};
    outline: none;
  }

  ${inputHoverActive}

  @media ${device.mobileL} {
    padding: 10px 15px;
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
  return (
    <MultipleForm>
      {!!title ? (
        <MultipleLabel htmlFor={key}>{title}</MultipleLabel>
      ) : (
        <VisuallyHidden>
          <label htmlFor={key}>{placeholder}</label>
        </VisuallyHidden>
      )}
      <MultipleTextarea id={key} name={key} placeholder={placeholder} />
    </MultipleForm>
  );
};

import styled from "styled-components";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";
import { clampText, inputHoverActive } from "@/common/styles/mixins";
import { FC } from "react";

const Input = styled("input")`
  height: 50px;
  width: 100%;
  padding-inline: 25px;
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  border: ${borders.borderGrayAccent};
  border-radius: ${borders.bigBorderRadius};
  color: ${colors.blackTotal};

  &::placeholder {
    color: ${colors.grayAccent};
  }

  &:focus {
    border-color: ${colors.blackTotal};
    background-color: ${colors.whiteBackground};
    outline: none;
  }

  ${inputHoverActive}

  @media ${device.mobile} {
    height: calc(50px / 1.2);
    padding-inline: 15px;

    ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  }
`;

interface AuthInputProps {
  id: string;
  type: string;
  placeholder: string;
}

export const AuthInput: FC<AuthInputProps> = ({ id, type, placeholder }) => {
  return <Input id={id} type={type} placeholder={placeholder} />;
};

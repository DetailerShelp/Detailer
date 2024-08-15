import {
  SettingsSummary,
  SettingsSummaryTitle,
  SettingsSummaryTitleWrapper,
} from "@/modules/user/settings/components/styles";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { useState } from "react";
import styled from "styled-components";
import { square } from "@/common/styles/mixins";
import { transitions } from "@/common/styles/styleConstants";
import { ImageComponentsTypes } from "@/common/svg-helper";

const SettingsSummaryIcon = styled(SvgHelper)<{ $isOpen: boolean }>`
  ${square(20)}
  transform: ${(props) => props.$isOpen && "rotate(-180deg)"};
  transition: ${transitions.fastTransition};
`;

interface SettingSummaryProps {
  title: string;
  icon: ImageComponentsTypes;
}

export const SettingSummary = ({ title, icon }: SettingSummaryProps) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <SettingsSummary onClick={() => (isOpen ? setOpen(false) : setOpen(true))}>
      <SettingsSummaryTitleWrapper>
        <SvgHelper iconName={icon} />
        <SettingsSummaryTitle>{title}</SettingsSummaryTitle>
      </SettingsSummaryTitleWrapper>
      <SettingsSummaryIcon iconName="arrowDown" $isOpen={isOpen} />
    </SettingsSummary>
  );
};

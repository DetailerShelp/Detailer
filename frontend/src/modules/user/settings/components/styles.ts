import {
  clampText,
  flexCenter,
  hoverActive,
  resetLink,
  styledWrapper,
} from "@/common/styles/mixins";
import {
  borders,
  colors,
  fonts,
  transitions,
} from "@/common/styles/styleConstants";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SettingsWrapper = styled("div")`
  ${styledWrapper}

  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SettingsList = styled("ul")`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SettingsItem = styled("li")`
  width: 100%;
`;

export const SettingsDetails = styled("details")`
  width: 100%;
`;

export const SettingsSummary = styled("summary")`
  width: 100%;
  padding: 15px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;
  position: relative;

  transition: ${transitions.fastTransition};
  ${hoverActive}
  user-select: none;
  cursor: pointer;

  &:hover {
    border-radius: ${borders.defaultBorderRadius};
  }
`;

export const SettingsSummaryTitleWrapper = styled("div")`
  ${flexCenter}
  column-gap: 15px;
`;

export const SettingsSummaryTitle = styled("h3")`
  font-weight: ${fonts.weights.medium};
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
`;

export const SettingsSummaryContent = styled("div")`
  width: 100%;
  padding: 15px 25px;
`;

export const SettingsSummaryList = styled("ul")`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const SettingsSummaryItem = styled("li")`
  display: flex;
  flex-direction: column;
`;

export const SettingsSummaryItemTitle = styled("h4")`
  font-weight: ${fonts.weights.medium};
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
  user-select: none;
`;

export const SettingsSummaryItemContent = styled("p")`
  color: ${colors.grayAccent};
  font-weight: ${fonts.weights.regular};
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)};
`;

export const SettingsSummaryItemContentPassword = styled(
  SettingsSummaryItemContent
)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SettingsSummaryItemContentLink = styled(NavLink)`
  ${resetLink}
  color: ${colors.blue};
  font-weight: ${fonts.weights.medium};
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)};
  transition: ${transitions.fastTransition};

  &:hover {
    color: ${colors.darkBlue};
  }
`;

export const SettingsSummaryItemThemeLink = styled("a")<{ isActive: boolean }>`
  color: ${(props) =>
    props.isActive ? `${colors.blackTotal}` : `${colors.grayAccent}`};
  font-weight: ${fonts.weights.regular};
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 15px;
  height: 50px;

  ${hoverActive}
  user-select: none;

  &:hover {
    border-radius: ${borders.defaultBorderRadius};
  }
`;

export const SettingsSummaryItemChatWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  aspect-ratio: 1;
  margin-block: 15px;
  padding: 30px 15px;
  border-radius: ${borders.defaultBorderRadius};
  background-color: ${colors.whiteBackground};
`;

import {
  SettingsDetails,
  SettingsItem,
  SettingsSummaryContent,
  SettingsSummaryItem,
  SettingsSummaryItemChatWrapper,
  SettingsSummaryItemThemeLink,
  SettingsSummaryItemTitle,
  SettingsSummaryList,
} from "@/modules/user/settings/components/styles";
import { SettingSummary } from "@/modules/user/settings/components/SettingSummary";
import styled from "styled-components";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { square } from "@/common/styles/mixins";
import { colors } from "@/common/styles/styleConstants";
import { useState } from "react";
import { SettingsNavLinks } from "@/common/styles/tags/a/SettingsNavLinks";
// import { useState } from "react";

const SettingsSummaryIcon = styled(SvgHelper)<{ isActive: boolean }>`
  ${square(18)};
  color: ${colors.blue};
  display: ${(props) => !props.isActive && "none"};
`;

export const ViewSettings = () => {
  const [theme, setTheme] = useState();

  return (
    <SettingsItem>
      <SettingsDetails>
        <SettingSummary title="Внешний вид" icon="view" />

        <SettingsSummaryContent>
          <SettingsSummaryList>
            <SettingsSummaryItem>
              <SettingsSummaryItemTitle>Тема</SettingsSummaryItemTitle>

              <SettingsSummaryItemThemeLink isActive={theme === 'light'} >
                <p>Светлая</p>
                <SettingsSummaryIcon iconName="checkMark" isActive={theme === 'light'} />
              </SettingsSummaryItemThemeLink>

              <SettingsSummaryItemThemeLink isActive={theme === 'dark'}>
                <p>Темная</p>
                <SettingsSummaryIcon iconName="checkMark" isActive={theme === 'dark'} />
              </SettingsSummaryItemThemeLink>
            </SettingsSummaryItem>

            <SettingsSummaryItem>
              <SettingsSummaryItemTitle>Оформление чата</SettingsSummaryItemTitle>

              <SettingsSummaryItemChatWrapper>dff</SettingsSummaryItemChatWrapper>

              <SettingsNavLinks />

              TODO
            </SettingsSummaryItem>
          </SettingsSummaryList>
        </SettingsSummaryContent>
      </SettingsDetails>
    </SettingsItem>
  );
};

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
import { SettingsNavLinks } from "@/common/styles/tags/a/SettingsNavLinks";
import { useActions } from "@/store/actions";
import { darkTheme, lightTheme } from "@/common/styles/theme";

const SettingsSummaryIcon = styled(SvgHelper)<{ isActive: boolean }>`
  ${square(18)};
  color: ${colors.blue};
  display: ${(props) => !props.isActive && "none"};
`;

export const ViewSettings = () => {
  const { setTheme } = useActions();
  const theme = localStorage.getItem("theme");

  const handleChangeTheme = (theme: string) => {
    setTheme(theme === "light" ? {theme: lightTheme} : {theme: darkTheme} );
    localStorage.setItem("theme", theme);
    document.location.reload();
  };

  return (
    //TODO добавить отслеживание открытия данной вкладки
    <SettingsItem>
      <SettingsDetails open>
        <SettingSummary title="Внешний вид" icon="view" />

        <SettingsSummaryContent>
          <SettingsSummaryList>
            <SettingsSummaryItem>
              <SettingsSummaryItemTitle>Тема</SettingsSummaryItemTitle>

              <SettingsSummaryItemThemeLink
                isActive={theme === "light"}
                onClick={() => handleChangeTheme("light")}
              >
                <p>Светлая</p>
                <SettingsSummaryIcon
                  iconName="checkMark"
                  isActive={theme === "light"}
                />
              </SettingsSummaryItemThemeLink>

              <SettingsSummaryItemThemeLink
                isActive={theme === "dark"}
                onClick={() => handleChangeTheme("dark")}
              >
                <p>Темная</p>
                <SettingsSummaryIcon
                  iconName="checkMark"
                  isActive={theme === "dark"}
                />
              </SettingsSummaryItemThemeLink>
            </SettingsSummaryItem>

            <SettingsSummaryItem>
              <SettingsSummaryItemTitle>
                Оформление чата
              </SettingsSummaryItemTitle>
              <SettingsSummaryItemChatWrapper>
                dff
              </SettingsSummaryItemChatWrapper>
              <SettingsNavLinks />
              TODO
            </SettingsSummaryItem>
          </SettingsSummaryList>
        </SettingsSummaryContent>
      </SettingsDetails>
    </SettingsItem>
  );
};

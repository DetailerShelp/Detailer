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
import { NavigationList, NavProfileButton } from "@/common/styles/tags/button/NavProfileButton";
import { useState } from "react";

const SettingsSummaryIcon = styled(SvgHelper)<{ isActive: boolean }>`
  ${square(18)};
  color: ${colors.blue};
  display: ${(props) => !props.isActive && "none"};
`;

export const ViewSettings = () => {
  const [publicationPage, setPublicationPage] = useState("color");
  const theme = localStorage.getItem("theme");

  const handleChangeTheme = (theme: string) => {
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
              <NavigationList>
                <NavProfileButton
                  isActive={publicationPage === "fone"}
                  click={() => setPublicationPage("fone")}
                  icon="fone"
                  title="Фон"
                />
                <NavProfileButton
                  isActive={publicationPage === "color"}
                  click={() => setPublicationPage("color")}
                  icon="color"
                  title="Цвет"
                />
              </NavigationList>
              TODO
            </SettingsSummaryItem>
          </SettingsSummaryList>
        </SettingsSummaryContent>
      </SettingsDetails>
    </SettingsItem>
  );
};

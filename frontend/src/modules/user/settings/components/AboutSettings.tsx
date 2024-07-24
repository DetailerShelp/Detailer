import {
  SettingsDetails,
  SettingsItem,
  SettingsSummaryContent,
  SettingsSummaryItem,
  SettingsSummaryItemContent,
  SettingsSummaryItemContentLink,
  SettingsSummaryItemTitle,
  SettingsSummaryList,
} from "@/modules/user/settings/components/styles";
import { SettingSummary } from "@/modules/user/settings/components/SettingSummary";

export const AboutSettings = () => {
  return (
    <SettingsItem>
      <SettingsDetails>
        <SettingSummary title="О приложении" icon="info" />

        <SettingsSummaryContent>
          <SettingsSummaryList>
            <SettingsSummaryItem>
              <SettingsSummaryItemContentLink to={"/"}>
                Политика Конфиденциальности
              </SettingsSummaryItemContentLink>
            </SettingsSummaryItem>

            <SettingsSummaryItem>
              <SettingsSummaryItemTitle>Язык</SettingsSummaryItemTitle>

              <SettingsSummaryItemContent>Русский</SettingsSummaryItemContent>
            </SettingsSummaryItem>

            <SettingsSummaryItem>
              <SettingsSummaryItemTitle>Масштаб</SettingsSummaryItemTitle>

              <SettingsSummaryItemContent>100%</SettingsSummaryItemContent>
            </SettingsSummaryItem>
          </SettingsSummaryList>
        </SettingsSummaryContent>
      </SettingsDetails>
    </SettingsItem>
  );
};

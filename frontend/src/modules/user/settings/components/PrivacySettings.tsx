import {
  SettingsDetails,
  SettingsItem,
  SettingsSummaryContent,
  SettingsSummaryItem,
  SettingsSummaryItemTitle,
  SettingsSummaryList,
} from "@/modules/user/settings/components/styles";
import { SettingSummary } from "@/modules/user/settings/components/SettingSummary";

export const PrivacySettings = () => {
  return (
    <SettingsItem>
      <SettingsDetails>
        <SettingSummary title="Приватность" icon="privacy" />

        <SettingsSummaryContent>
          <SettingsSummaryList>
            <SettingsSummaryItem>
              <SettingsSummaryItemTitle>TODO</SettingsSummaryItemTitle>
            </SettingsSummaryItem>
          </SettingsSummaryList>
        </SettingsSummaryContent>
      </SettingsDetails>
    </SettingsItem>
  );
};

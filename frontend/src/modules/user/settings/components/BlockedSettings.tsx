import {
  SettingsDetails,
  SettingsItem,
  SettingsSummaryContent,
  SettingsSummaryItem,
  SettingsSummaryItemTitle,
  SettingsSummaryList,
} from "@/modules/user/settings/components/styles";
import { SettingSummary } from "@/modules/user/settings/components/SettingSummary";

export const BlockedSettings = () => {
  return (
    <SettingsItem>
      <SettingsDetails>
        <SettingSummary title="Черный список" icon="blockedProfile" />

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

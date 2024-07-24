import {
  SettingsList,
  SettingsWrapper,
} from "@/modules/user/settings/components/styles";
import { PageHeaderContent } from "@/modules/user/PageHeaderContent";
import { AccountSettings } from "@/modules/user/settings/components/AccountSettings";
import { ViewSettings } from "@/modules/user/settings/components/ViewSettings";
import { PrivacySettings } from "@/modules/user/settings/components/PrivacySettings";
import { BlockedSettings } from "@/modules/user/settings/components/BlockedSettings";
import { AboutSettings } from "@/modules/user/settings/components/AboutSettings";

export const SettingsContent = () => {
  return (
    <SettingsWrapper>
      <PageHeaderContent title="Настройки" />

      <SettingsList>
        <AccountSettings />
        <ViewSettings />
        <PrivacySettings />
        <BlockedSettings />
        <AboutSettings />
      </SettingsList>
    </SettingsWrapper>
  );
};

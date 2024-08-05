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
import { authorizedUser } from "@/store/reducers/user/authorizedUser";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";

export const SettingsContent = () => {
  const userId = authorizedUser() || 1;
  const {data} = useGetUserByIdQuery(userId);

  return (
    <SettingsWrapper>
      <PageHeaderContent title="Настройки" />

      <SettingsList>
        <AccountSettings user={data}/>
        <ViewSettings />
        <PrivacySettings />
        <BlockedSettings />
        <AboutSettings />
      </SettingsList>
    </SettingsWrapper>
  );
};

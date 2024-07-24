import {
  SettingsDetails,
  SettingsItem,
  SettingsSummaryContent,
  SettingsSummaryList,
} from "@/modules/user/settings/components/styles";
import { SettingSummary } from "@/modules/user/settings/components/SettingSummary";
import { SummaryItem } from "@/modules/user/settings/components/SummaryItem";

export const AccountSettings = () => {
  return (
    <SettingsItem>
      <SettingsDetails>
        <SettingSummary title="Аккаунт" icon="profile" />

        <SettingsSummaryContent>
          <SettingsSummaryList>
            <SummaryItem title="ID Пользователя" content="#000000001" />
            <SummaryItem title="Имя Пользователя" content="Nagibator228" />
            <SummaryItem title="Email" content="nagibator228@gmail.com" />
            <SummaryItem title="Пароль" content="• • • • • • • •" link="/" />
          </SettingsSummaryList>
        </SettingsSummaryContent>
      </SettingsDetails>
    </SettingsItem>
  );
};

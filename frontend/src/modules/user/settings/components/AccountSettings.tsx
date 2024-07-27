import {
  SettingsDetails,
  SettingsItem,
  SettingsSummaryContent,
  SettingsSummaryList,
} from "@/modules/user/settings/components/styles";
import { SettingSummary } from "@/modules/user/settings/components/SettingSummary";
import { SummaryItem } from "@/modules/user/settings/components/SummaryItem";
import { User } from "@/store/reducers/user/types";

interface AccountSettingsProps {
  user: User | undefined;
}

export const AccountSettings = ({user}: AccountSettingsProps) => {
  return (
    <SettingsItem>
      <SettingsDetails>
        <SettingSummary title="Аккаунт" icon="profile" />

        <SettingsSummaryContent>
          <SettingsSummaryList>
            <SummaryItem title="ID Пользователя" content={`#${user?.id}`} />
            <SummaryItem title="Имя Пользователя" content={`${user?.username}`} />
            <SummaryItem title="Email" content={`${user?.email}`} />
            <SummaryItem title="Пароль" content="• • • • • • • •" link="/" />
          </SettingsSummaryList>
        </SettingsSummaryContent>
      </SettingsDetails>
    </SettingsItem>
  );
};

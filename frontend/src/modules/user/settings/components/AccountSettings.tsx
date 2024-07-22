import {
  SettingsDetails,
  SettingsItem,
  SettingsSummaryContent,
  SettingsSummaryItem,
  SettingsSummaryItemContent,
  SettingsSummaryItemContentLink,
  SettingsSummaryItemContentPassword,
  SettingsSummaryItemTitle,
  SettingsSummaryList,
} from "@/modules/user/settings/components/styles";
import { SettingSummary } from "@/modules/user/settings/components/SettingSummary";

export const AccountSettings = () => {
  return (
    <SettingsItem>
      <SettingsDetails>
        <SettingSummary title="Аккаунт" icon="profile" />

        <SettingsSummaryContent>
          <SettingsSummaryList>
            <SettingsSummaryItem>
              <SettingsSummaryItemTitle>
                ID Пользователя
              </SettingsSummaryItemTitle>

              <SettingsSummaryItemContent>
                #000000001
              </SettingsSummaryItemContent>
            </SettingsSummaryItem>

            <SettingsSummaryItem>
              <SettingsSummaryItemTitle>
                Имя Пользователя
              </SettingsSummaryItemTitle>

              <SettingsSummaryItemContent>
                Nagibator228
              </SettingsSummaryItemContent>
            </SettingsSummaryItem>

            <SettingsSummaryItem>
              <SettingsSummaryItemTitle>Email</SettingsSummaryItemTitle>

              <SettingsSummaryItemContent>
                nagibator228@gmail.com
              </SettingsSummaryItemContent>
            </SettingsSummaryItem>

            <SettingsSummaryItem>
              <SettingsSummaryItemTitle>Пароль</SettingsSummaryItemTitle>

              <SettingsSummaryItemContentPassword>
                • • • • • • • •{/* //TODO добавить link */}
                <SettingsSummaryItemContentLink to={"/"}>
                  Сменить пароль
                </SettingsSummaryItemContentLink>
              </SettingsSummaryItemContentPassword>
            </SettingsSummaryItem>
          </SettingsSummaryList>
        </SettingsSummaryContent>
      </SettingsDetails>
    </SettingsItem>
  );
};

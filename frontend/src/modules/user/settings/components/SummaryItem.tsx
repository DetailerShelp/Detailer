import {
  SettingsSummaryItem,
  SettingsSummaryItemContent,
  SettingsSummaryItemContentLink,
  SettingsSummaryItemContentPassword,
  SettingsSummaryItemTitle,
} from "@/modules/user/settings/components/styles";

interface SettingsSummaryProps {
  title: string;
  content: string;
  link?: string;
}

export const SummaryItem = ({
  title,
  content,
  link,
}: SettingsSummaryProps) => {
  return (
    <SettingsSummaryItem>
      <SettingsSummaryItemTitle>{title}</SettingsSummaryItemTitle>

      {!!link ? (
        <SettingsSummaryItemContentPassword>
          {content}
          <SettingsSummaryItemContentLink to={link}>
            Сменить пароль
          </SettingsSummaryItemContentLink>
        </SettingsSummaryItemContentPassword>
      ) : (
        <SettingsSummaryItemContent>{content}</SettingsSummaryItemContent>
      )}
    </SettingsSummaryItem>
  );
};

import { PageContent } from "@/modules/user/PageContent";
import { Profile } from "@/modules/user/profile/components/Profile";
import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";
import { Accounts } from "@/common/components/widgets/accounts/Accounts";
import { ProfileLoading } from "@/common/components/loading/ProfileLoading";
import { AccountsLoading } from "@/common/components/loading/AccountsLoading";
import { useState } from "react";
import { ModalProfilesList } from "@/modules/user/profile/components/modal/ModalProfilesList";
import { ErrorInternetPage } from "@/common/components/error/ErrorInternetPage";

export const ProfilePage = () => {
  const { userId } = useParams();
  const { data, isLoading, isError } = useGetUserByIdQuery(Number(userId));

  const [modalSubscribers, setModalSubscribers] = useState(false);
  const [modalSubscribes, setModalSubscribes] = useState(false);

  return (
    <>
      <ModalProfilesList
        isOpen={modalSubscribers}
        setOpen={setModalSubscribers}
        title="Подписчики"
        placeholder="подписчиков"
        user={data?.subscribers}
      />

      <ModalProfilesList
        isOpen={modalSubscribes}
        setOpen={setModalSubscribes}
        title="Подписки"
        placeholder="подписок"
        user={data?.subscribes}
      />

      {isError ? (
        <ErrorInternetPage />
      ) : (
        <PageContent
          content={isLoading ? <ProfileLoading /> : <Profile user={data} />}
          widgetOne={
            isLoading ? (
              <AccountsLoading title="Подписчики" />
            ) : (
              <Accounts
                title="Подписчики"
                user={data?.subscribers}
                click={() => setModalSubscribers(true)}
              />
            )
          }
          widgetTwo={
            isLoading ? (
              <AccountsLoading title="Подписки" />
            ) : (
              <Accounts
                title="Подписки"
                user={data?.subscribes}
                click={() => setModalSubscribes(true)}
              />
            )
          }
        />
      )}
    </>
  );
};

import { ErrorInternetPage } from "@/common/components/error/ErrorInternetPage";
import { EditLoading } from "@/common/components/loading/EditLoading";
import { PageContent } from "@/modules/user/PageContent";
import { EditProfile } from "@/modules/user/profile/pages/edit-profile/EditProfile";
import { authorizedUser } from "@/store/reducers/user/authorizedUser";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";

export const EditPage = () => {
  const userId = Number(authorizedUser());
  const { data, isLoading, isError } = useGetUserByIdQuery(userId);

  return (
    <>
      {isError ? (
        <ErrorInternetPage />
      ) : (
        <PageContent content={isLoading ? <EditLoading /> : <EditProfile user={data} />} />
      )}
    </>
  );
};

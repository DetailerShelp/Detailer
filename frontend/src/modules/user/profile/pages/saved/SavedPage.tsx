import { ErrorInternetPage } from "@/common/components/error/ErrorInternetPage";
import { SavedLoading } from "@/common/components/loading/SavedLoading";
import { PageContent } from "@/modules/user/PageContent";
import { SavedContent } from "@/modules/user/profile/pages/saved/SavedContent";
import { authorizedUser } from "@/store/reducers/user/authorizedUser";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";

export const SavedPage = () => {
  const userId = Number(authorizedUser());
  const { data, isLoading, isError } = useGetUserByIdQuery(userId);

  return (
    <>
      {isError ? (
        <ErrorInternetPage />
      ) : (
        <PageContent
          content={isLoading ? <SavedLoading /> : <SavedContent user={data} />}
        />
      )}
    </>
  );
};

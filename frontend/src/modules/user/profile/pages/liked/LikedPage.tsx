import { ErrorInternetPage } from "@/common/components/error/ErrorInternetPage";
import { LikedLoading } from "@/common/components/loading/LikedLoading";
import { PageContent } from "@/modules/user/PageContent";
import { LikedContent } from "@/modules/user/profile/pages/liked/LikedContent";
import { authorizedUser } from "@/store/reducers/user/authorizedUser";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";

export const LikedPage = () => {
  const userId = Number(authorizedUser());
  const { data, isLoading, isError } = useGetUserByIdQuery(userId);

  return (
    <>
      {isError ? (
        <ErrorInternetPage />
      ) : (
        <PageContent
          content={isLoading ? <LikedLoading /> : <LikedContent user={data} />}
        />
      )}
    </>
  );
};

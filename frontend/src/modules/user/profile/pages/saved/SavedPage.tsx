import { PageContent } from "@/modules/user/PageContent"
import { SavedContent } from "@/modules/user/profile/pages/saved/SavedContent"
import { authorizedUser } from "@/store/reducers/user/authorizedUser";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";

export const SavedPage = () => {
  const userId = Number(authorizedUser());
  const { data } = useGetUserByIdQuery(userId);

  return (
    <PageContent content={<SavedContent user={data} />}/>
  )
}

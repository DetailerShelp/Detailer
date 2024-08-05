import { PageContent } from "@/modules/user/PageContent"
import { LikedContent } from "@/modules/user/profile/pages/liked/LikedContent"
import { authorizedUser } from "@/store/reducers/user/authorizedUser";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";

export const LikedPage = () => {
  const userId = Number(authorizedUser());
  const { data } = useGetUserByIdQuery(userId);

  return (
    <PageContent content={<LikedContent user={data} />}/>
  )
}

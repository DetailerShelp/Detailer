import styled from "styled-components";
import { Post } from "@/common/components/post/Post";
import { Garage } from "@/common/components/garage/Garage";
import { GarageLoading } from "@/common/components/loading/GarageLoading";
import { PostLoading } from "@/common/components/loading/PostLoading";
import { useGetPostByIdQuery } from "@/store/reducers/post/postApi";


const Wrapper = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;
export const HomeContent = () => {
  const { data, isLoading } = useGetPostByIdQuery(1);

  return (
    <Wrapper>
      {isLoading ? <PostLoading /> : <Post post={data} />}
      <Garage />
      <GarageLoading />
    </Wrapper>
  );
};

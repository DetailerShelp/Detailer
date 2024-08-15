import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "@/api/api";
import { PostInfo } from "@/store/reducers/post/types";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    getPosts: build.query<PostInfo[], void>({
      query: () => ({
        url: `/post`,
        method: "GET",
      }),
      providesTags: ["Post"],
      transformResponse: (response: PostInfo[]) => response,
    }),

    getPostById: build.query<PostInfo, number>({
      query: (userId) => ({
        url: `/post/${userId}`,
        method: "GET",
      }),
      providesTags: ["Post"],
      transformResponse: (response: PostInfo) => response,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
} = postApi;

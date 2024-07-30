import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "@/store/reducers/user/types";
import { baseUrl } from "@/api/api";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => ({
        url: `/user`,
        method: "GET",
      }),
      providesTags: ["User"],
      transformResponse: (response: User[]) => response,
    }),

    getUserById: build.query<User, number>({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: "GET",
      }),
      providesTags: ["User"],
      transformResponse: (response: User) => response,
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
} = userApi;

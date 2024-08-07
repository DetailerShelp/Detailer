import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// убрать
const baseUrl = "https://66a61d7f23b29e17a1a1c4ea.mockapi.io/"

export interface Comment {
  id: number,
  author: string,
  message: string,
  likes: number,
  answersCount?: number
  parentId?: number
}


export const shortsApi = createApi({
  reducerPath: 'shortsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: () => ({}),
})

export const {} = shortsApi;
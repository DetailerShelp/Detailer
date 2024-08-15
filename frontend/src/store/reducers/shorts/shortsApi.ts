import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// ToDo
export const shortsApi = createApi({
  reducerPath: 'shortsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: () => ({}),
})

export const {} = shortsApi;
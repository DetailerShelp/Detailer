import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = "https://66a61d7f23b29e17a1a1c4ea.mockapi.io/"

export interface Comment {
    id: number,
    author: string,
    message: string,
    likes: number,
    answersCount?: number
    parentId?: number
}

// ToDo { подумать что отдавать на бек }
export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getComments: builder.query<Comment[], void>({
            query: () => `comments`,
        }),
        getAnswers: builder.query<Comment[], number>({
            query: (id) => `answers?parentId=${id}`,
        }),
        createComment: builder.mutation<void, Comment>({
            query: (comment) => ({
                url: `comments`,
                method: 'POST',
                body: comment
            }),
        }),
        createAnswer: builder.mutation<void, Comment>({
            query: (answer) => ({
                url: `answers`,
                method: 'POST',
                body: answer
            })
        })
    }),
})

export const { 
    useGetCommentsQuery,
    useGetAnswersQuery,
    useCreateAnswerMutation,
    useCreateCommentMutation,
} = commentsApi;
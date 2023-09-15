import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { setUserAndToken } from "../slices/userSlice";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: retry(
        fetchBaseQuery({
            baseUrl: "https://json-server-vercel-jdbq2.vercel.app",
        }),
        {
            maxRetries: 0,
        }
    ),

    endpoints: (builder) => ({
        loginUser: builder.mutation<
            LoginResponse,
            { email: string; password: string }
        >({
            query: ({ email, password }) => ({
                url: `/api/login`,
                method: "post",
                body: { email, password },
            }),
            async onQueryStarted(_info, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setUserAndToken(data?.user));
                } catch (err) {
                    console.log(err);
                }
            },
        }),
    }),
});

export const { useLoginUserMutation } = authApi;

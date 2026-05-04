import { USERS_URL } from '../costants'
import { apiSlice } from './apiSlices';

export const userApiSlices = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: "POST",
                body: data,
                credentials: 'include',
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: "POST",
                credentials: 'include',
            }),
        }),
    }),
});

export const { useLoginMutation, useLogoutMutation } = userApiSlices;
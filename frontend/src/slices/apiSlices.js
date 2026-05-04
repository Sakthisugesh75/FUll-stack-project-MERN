import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../costants'
const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include"
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQuery,
    tagTypes: ["User"],
    endpoints: (builder) => ({})
});

export default apiSlice;
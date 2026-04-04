import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../costants'

    const basequery =fetchBaseQuery({baseUrl:BASE_URL});

    export const apislices=createApi({
        baseQuery:basequery,
        endpoints:(builder)=>({})
    })
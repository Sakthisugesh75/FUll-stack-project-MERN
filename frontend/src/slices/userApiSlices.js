import { USERS_URL } from "../costants";
import { apislices } from "./apiSlices";

export const userApiSlices =apislices.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(data)=>({
                url:`${USERS_URL}/login`,
                method:"POST",
                body:data,
                credentials:true
            })
        })
    }

    )
})

export const {useLoginMutation}=userApiSlices
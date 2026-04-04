import { PRODUCT_URL } from "../costants";
import { apislices } from "./apiSlices";

export const productApiSlices =apislices.injectEndpoints({
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:()=>({
                url:PRODUCT_URL
            })
        })
    })
})

export const { useGetProductsQuery }=productApiSlices;
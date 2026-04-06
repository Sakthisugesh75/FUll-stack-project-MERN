import { PRODUCT_URL } from "../costants";
import { apislices } from "./apiSlices";

export const productApiSlices =apislices.injectEndpoints({
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:()=>({
                url:PRODUCT_URL
            })
        }),
         getProductsdetails:builder.query({
            query:(productId)=>({
                url:`${PRODUCT_URL}/${productId}`
            })
        })
    })
})

export const { useGetProductsQuery, useGetProductsdetailsQuery }=productApiSlices; 
import { PRODUCT_URL } from "../costants";
import { apiSlice } from './apiSlices';
export const productApiSlices =apiSlice.injectEndpoints({
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
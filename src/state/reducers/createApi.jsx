import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const productApi = createApi({
    reducerPath : "getApiLink",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://dummyjson.com/"
    }),
    endpoints : (builder) => ({
        getAllProducts : builder.query({
            query : () => "carts"
        }),
        getAllUsers : builder.query({
            query : () => "users"
        })
    })
})

export const { useGetAllProductsQuery, useGetAllUsersQuery } = productApi
export default productApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://630fd20e36e6a2a04ee2254c.mockapi.io/api/' }),
    endpoints: (build) => ({
        getProducts: build.query({
            query: (limit = '') => `products${limit != '' && `?page=1&limit=${limit}`}`,
            providesTags: (result) =>
            result
              ? [
                  ...result.map(({ id }: any) => ({ type: 'Products', id })),
                  { type: 'Products', id: 'LIST' },
                ]
              : [{ type: 'Products', id: 'LIST' }], 
        }),
        postProduct: build.mutation({
            query: (body) => ({
                url: 'products',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Products', id: 'LIST' }]
        }),
        deleteProduct: build.mutation({
            query: (id) => ({ url: `products/${id}`, method: 'DELETE' }),
            invalidatesTags: [{ type: 'Products', id: 'LIST' }]
        })
    })
})

export const { useGetProductsQuery, usePostProductMutation, useDeleteProductMutation } = productsApi;
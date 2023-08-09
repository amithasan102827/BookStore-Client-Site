import { api } from '../api/apiSlice';

const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/books',
        }),
        singleProduct: builder.query({
            query: (id) => `/books/${id}`,
        }),
        postComment: builder.mutation({
            query: ({ id, data }) => ({
                url: `/books/${id}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['comments'],
        }),
        getComment: builder.query({
            query: (id) => `/books/${id}/comments`,
            providesTags: ['comments'],
        }),
    }),
});

export const {
    useGetCommentQuery,
    useGetProductsQuery,
    usePostCommentMutation,
    useSingleProductQuery,
} = productApi;
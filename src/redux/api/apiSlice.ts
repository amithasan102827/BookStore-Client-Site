import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bookstore-t1l3.onrender.com/api' }),
    tagTypes: ['comments'],
    endpoints: () => ({}),
});
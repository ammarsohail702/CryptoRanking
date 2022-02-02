import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const CryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '72676e7f95msh6b8dc5fcd6e3f4ep16bddbjsn00ff9bcb1494'
} 

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) =>({url, headers:CryptoApiHeaders});

export const CryptoApi= createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCoins: builder.query({
            query: (count)=>createRequest(`/coins?limit=${count}`),
        })
    })

});

export const {
    useGetCoinsQuery,
} = CryptoApi;
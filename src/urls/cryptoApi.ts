import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiHeaders = {
  'X-RapidAPI-Key': '34178f1525msh0c8eb09444b8b60p1db08ejsn059f77b5212d',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const BASE_URL = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url: any) => ({ url, headers: apiHeaders})

export const cryptoApi: any = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery( { baseUrl: BASE_URL } ),
    endpoints: (builder) => ({
      getCryptos: builder.query({
         query: (count) => createRequest(`/coins?limit=${count}`)
      }),
      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`)
     }),
     getCryptoHistory: builder.query({
      query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
   })
    })
})

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery
} = cryptoApi;




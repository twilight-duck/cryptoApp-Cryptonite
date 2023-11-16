import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiHeaders = {
    'X-RapidAPI-Key': '34178f1525msh0c8eb09444b8b60p1db08ejsn059f77b5212d',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}

const BASE_URL = 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk';

const createRequest = (url: any) => ({ url, headers: apiHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery( { baseUrl: BASE_URL } ),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
         query: () => createRequest(`https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk`)
      })
    })
})

export const {
  useGetCryptoNewsQuery,
} = cryptoNewsApi;
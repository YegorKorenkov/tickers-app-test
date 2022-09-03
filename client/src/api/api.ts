import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tickerApi = createApi({
  reducerPath: 'ticker',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});

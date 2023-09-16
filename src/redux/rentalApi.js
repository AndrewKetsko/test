import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rentalApi = createApi({
  reducerPath: "rental",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65057c21ef808d3c66f016b7.mockapi.io",
  }),

  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => ({
        url: "/adverts",
      }),
    }),
  }),
});

export const { useGetCarsQuery } = rentalApi;

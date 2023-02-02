
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MoviesApi = createApi({
    reducerPath: "MoviesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "adfasdfasdfs" }),
  
    endpoints: (builder) => ({
      getTemperature: builder.query({
        query: () => "",
      })

})
})


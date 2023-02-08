import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, BASE_URL } from "../views/Movies-Components/Constants";
export const MoviesApi = createApi({
  reducerPath: "MoviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => `movie/popular?api_key=${API_KEY}`,
    }),
    getMovies: builder.query({
      query: () => `movie/latest?api_key=${API_KEY}`,
    }),
    getTopRatedMovies: builder.query({
      query: () => `movie/top_rated?api_key=${API_KEY}`,
    }),
    getUpCommingMovies: builder.query({
      query: () => `movie/upcoming?api_key=${API_KEY}`,
    }),
    getSimilarMovies: builder.query({
      query: (movie_id) => `movie/${movie_id}/similar?api_key=${API_KEY}`,
    }),
    getMoviesDetail: builder.query({
      query: (movie_id) => `movie/${movie_id}?api_key=${API_KEY}`,
    }),
    getMoviesReviews: builder.query({
      query: (movie_id) => `movie/${movie_id}/reviews?api_key=${API_KEY}`,
    }),
    getFindMovies: builder.query({
      query: (query) => `search/movie?api_key=${API_KEY}&query=${query}`,
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpCommingMoviesQuery,
  useGetMoviesDetailQuery,
  useGetFindMoviesQuery,
  useGetMoviesQuery,
  useGetSimilarMoviesQuery,
  useGetMoviesReviewsQuery,
} = MoviesApi;

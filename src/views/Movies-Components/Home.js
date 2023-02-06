import { Grid } from "@mui/material";
import React from "react";
import { TopRatedMovies } from "./TopRatedMovies";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { first_path } from "./Constants";

import { useGetPopularMoviesQuery } from "../../services/MovieServices";
export const Home = () => {
  const { data } = useGetPopularMoviesQuery();

  return (
    <Grid item pt={3} width={500}>
      <Swiper navigation={true} modules={[Navigation]}>
        {data?.results?.map((x) => {
          return (
            <SwiperSlide>
              {" "}
              <img
                src={first_path + x.poster_path}
                alt="img"
                width="500"
                height="350"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Grid item pt={1}>
        <TopRatedMovies />
      </Grid>
    </Grid>
  );
};

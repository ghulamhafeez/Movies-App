import { Grid } from "@mui/material";
import React from "react";
import { TopRatedMovies } from "./TopRatedMovies";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { first_path } from "./Constants";
import { useNavigate } from "react-router-dom";
import { useGetPopularMoviesQuery } from "../../services/MovieServices";
export const Home = () => {
  const { data =[] } = useGetPopularMoviesQuery();

const navigate = useNavigate();
  const handleRedirect = (id) => {
    
    navigate(`/movies-detail/${id}`);
  };

  return (
    <Grid item pt={3} width={525}>
      <Swiper navigation={true} modules={[Navigation]}>
        {data?.results?.map((x) => {
          return (
            <SwiperSlide>
              {" "}
              <img
                src={first_path + x.poster_path}
                alt="img"
                width="525"
                height="350"
                onClick={()=>handleRedirect(x.id)}
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

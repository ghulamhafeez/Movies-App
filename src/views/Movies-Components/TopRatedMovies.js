import { Grid } from "@mui/material";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import Typography from "@mui/material/Typography";
import { useGetTopRatedMoviesQuery } from "../../services/MovieServices";
import { useNavigate } from "react-router-dom";
import { MovieSwiper } from "./Swiper";
export const TopRatedMovies = () => {
  const { data = [] } = useGetTopRatedMoviesQuery();
  const navigate = useNavigate();
  const handleRedirect = ({ id }) => {
    navigate(`/movies-detail/${id}`);
  };

  return (
    <Grid item sx={{ gap: 2 }} width={525}>
      <Typography
        sx={{
          fontSize: 16,
          textAlign: "left",
          color: "#046565",
          fontWeight: "bold",
          paddingBottom: 1,
        }}
      >
        Top Rated
      </Typography>
      <MovieSwiper data={data} handleRedirect={(x) => handleRedirect(x)} />
    </Grid>
  );
};

import React from "react";
import { Grid } from "@mui/material";
import { useNavigate ,useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import Typography from "@mui/material/Typography";
import { useGetSimilarMoviesQuery } from "../../services/MovieServices";
import {MovieSwiper} from "./Swiper"

export const SimilarMovies = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data =[] } = useGetSimilarMoviesQuery(id);
  console.log("dataS",data)
  const handleRedirect = ({id}) => {

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
        Similar Movies
      </Typography>
      <MovieSwiper  data={data}  handleRedirect={(x)=>handleRedirect(x)}/>
    </Grid>
  );
};

import React from "react";
import { Grid } from "@mui/material";
import { SimilarMovies } from "./SimilarMovies";
import { MoviesReviews } from "./MoviesReviews";
import { useGetMoviesDetailQuery } from "../../services/MovieServices";
import { useParams } from "react-router-dom";
import { first_path } from "./Constants";
import Typography from "@mui/material/Typography";
export const MoviesDetail = () => {

  const { id } = useParams();
  const { data = {} } = useGetMoviesDetailQuery(id);

  return (
    <Grid item direction={"column"} width={525} pt={3}>
           
      <img
        src={first_path + data?.poster_path}
        alt="A beautiful landscape."
        width="525"
        height="350"
      />
      <Typography
        sx={{
          fontSize: 16,
          textAlign: "left",
          color: "#046565",
          fontWeight: "bold",
        }}
      >
        Name :{data?.title}
      </Typography>
      <Typography
        sx={{
          fontSize: 13,
          textAlign: "left",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Release Date :{data?.release_date}
      </Typography>
      <Typography
        sx={{
          fontSize: 13,
          textAlign: "left",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Language :{data?.original_language}
      </Typography>
     

      <Typography
        sx={{
          fontSize: 13,
          textAlign: "left",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Popularity :{data?.popularity}
      </Typography>
      <Typography
        sx={{
          fontSize: 13,
          textAlign: "left",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Overview :{data?.overview}
      </Typography>

      <MoviesReviews />
      <SimilarMovies />
    </Grid>
  );
};

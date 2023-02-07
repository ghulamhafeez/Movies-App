import React from "react";
import { Grid } from "@mui/material";

export const MoviesDetail = () => {
  return (
    <Grid item>
      <Grid sx={{ width: 10, height: 30 }}>
        <img
          src="https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/the-twin-2022/large_the-twin-movie-poster-2022.jpeg"
          alt="A beautiful landscape."
          width="500"
          height="300"
        />
      </Grid>
    </Grid>
  );
};

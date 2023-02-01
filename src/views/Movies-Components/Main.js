import { Grid } from "@mui/material";
import React from "react";
import { Home } from "./Home";
import { TopRated } from "./TopRated";
export const Main = () => {
  return (
    <Grid item  pt={3} direction={"column"}>
      <Grid item >

        <Home />
      </Grid>

      <Grid item>
      
        <TopRated />
      </Grid>
    </Grid>
  );
};

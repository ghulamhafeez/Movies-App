import { Grid } from "@mui/material";
import React from "react";
import { StatCards } from "../views/Movies-Components/StatCards";
import { Sidebar } from "../views/Movies-Components/Sidebar";
import { SearchBar } from "../views/Movies-Components/SearchBar";
import { Contents } from "../container/Contents";
export const MainLayout = () => {
  return (
    <Grid container bgcolor={"black"}  >
      <Grid item container pb={0} >
        <SearchBar />
      </Grid>
      <Grid item container direction={"row"} justifyContent={"space-between"} pt={0}>
        <Grid item direction={"column"}>
          <Sidebar />
        </Grid>
        <Grid item >
          <Contents />
        </Grid>
        <Grid item direction={"column"}>
          <StatCards />
        </Grid>
      </Grid>
    </Grid>
  );
};

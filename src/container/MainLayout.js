import { Grid } from "@mui/material";
import React from "react";
import { Cards } from "../views/Movies-Components/Cards";
import { Sidebar } from "../views/Movies-Components/Sidebar";
import { SearchBar } from "../views/Movies-Components/SearchBar";
import { Contents } from "../container/Contents";
export const MainLayout = () => {
  return (
    <Grid container bgcolor={"black"} height={450} >
      <Grid item container  direction={"row"} pb={0}>
        <SearchBar />
      </Grid>
      <Grid item container display={"flex"} direction={"row"} justifyContent={"space-between"} pt={0}>
        <Grid item direction={"column"}>
          <Sidebar />
        </Grid>
        <Grid item direction={"column"} pr={60}>
          <Contents />
        </Grid>
        <Grid item direction={"column"}>
          <Cards />
        </Grid>
      </Grid>
    </Grid>
  );
};

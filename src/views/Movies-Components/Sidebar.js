import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export const Sidebar = () => {
  return (
    <Grid item pl={30} pt={3} display={"flex"} direction={"column"} gap={2}>
      <Button
        size="large"
        sx={{
          borderRadius: 5,
          bgcolor: "#008080",
          color: "white",
          fontSize: 13,
          width: 170,
        }}
      >
        Home
      </Button>
      <Button
        size="large"
        sx={{
          borderRadius: 5,
          bgcolor: "#008080",
          color: "white",
          fontSize: 13,
          width: 170,
        }}
      >
        Popular
      </Button>
      <Button
        size="large"
        sx={{
          borderRadius: 5,
          bgcolor: "#008080",
          color: "white",
          fontSize: 13,
          width: 170,
        }}
      >
        Upcomming
      </Button>
    </Grid>
  );
};

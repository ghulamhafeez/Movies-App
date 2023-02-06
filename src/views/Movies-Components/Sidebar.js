import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const Sidebar = () => {
  const navigate = useNavigate();

  const redirectToPopular = () => {
    navigate(`/popular-movies`);
  };
  const redirectToUpComming = () => {
    navigate(`/upcomming-movies`);
  };
  const redirectToHome = () => {
    navigate(``);
  };

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
        onClick={() => redirectToHome()}
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
        onClick={() => redirectToPopular()}
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
        onClick={() => redirectToUpComming()}
      >
        Upcomming
      </Button>
    </Grid>
  );
};

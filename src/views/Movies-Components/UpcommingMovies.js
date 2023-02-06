import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useGetUpCommingMoviesQuery } from "../../services/MovieServices";
import { first_path } from "./Constants";
export const UpcommingMovies = () => {
  const { data } = useGetUpCommingMoviesQuery();

  return (
    <Grid item display={"flex"} sx={{ flex: "wrap", gap: 2, width: 500 }}>
      <Typography
        sx={{
          fontSize: 16,
          textAlign: "left",
          color: "#046565",
          fontWeight: "bold",
        }}
      >
        UpComming
      </Typography>

      {data?.results?.map((x) => {
        return (
          <Card sx={{ width: 150 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image={first_path + x.poster_path}
                alt="img"
              />
              <CardContent sx={{ backgroundColor: "#2E2F2F", minHeight: 125 }}>
                <Typography
                  sx={{
                    fontSize: 14,
                    textAlign: "left",
                    color: "#046565",
                    fontWeight: "bold",
                  }}
                >
                  {x.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    textAlign: "left",
                    color: "White",
                    fontWeight: "bold",
                  }}
                >
                  Rating: {x.vote_average}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Grid>
  );
};

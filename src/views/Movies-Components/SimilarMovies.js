import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { first_path } from "./Constants";
import { useGetSimilarMoviesQuery } from "../../services/MovieServices";
export const SimilarMovies = () => {
  const {  data =[] } = useGetSimilarMoviesQuery();
  return (
    <Grid item display={"flex"} sx={{ flex: "wrap", gap: 2 }}>
      <Typography
        sx={{
          fontSize: 16,
          textAlign: "left",
          color: "#046565",
          fontWeight: "bold",
        }}
      >
        Similar
      </Typography>

      {data?.results?.map((x) => {
        return (
          <Card sx={{ width: 150 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={first_path + x.poster_path}
                alt="green iguana"
              />
              <CardContent sx={{ backgroundColor: "#2E2F2F", minHeight: 125 }}>
                <Typography
                  sx={{
                    fontSize: 14,
                    textAlign: "center",
                    color: "#046565",
                    fontWeight: "bold",
                  }}
                >
                  {x.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    textAlign: "center",
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

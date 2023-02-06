import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import {first_path} from "./Constants"
import { useGetPopularMoviesQuery } from "../../services/MovieServices";
export const PopularMovies = () => {
  const { data } = useGetPopularMoviesQuery();

  return (
    <Grid item display={"flex"} sx={{  gap: 2 ,width:500}}>
       <Typography sx={{
                    fontSize: 16  ,
                    textAlign: "left",
                    color: "#046565",
                    fontWeight: "bold"}}>Popular</Typography>

      {data?.results.map((x) => {
  
        return (
          <Card sx={{flex: "wrap", width: 150 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image={first_path+x.poster_path}
                alt="img"
              />
              <CardContent sx={{ backgroundColor: "#2E2F2F", minHeight: 125}}>
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

import { Grid } from "@mui/material";
import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useGetTopRatedMoviesQuery } from "../../services/MovieServices";
import { first_path } from "./Constants";
export const TopRatedMovies = () => {
  const { data } = useGetTopRatedMoviesQuery();

  return (
    <Grid item sx={{ gap: 2 }} width={500}>
      <Typography
        sx={{
          fontSize: 16,
          textAlign: "left",
          color: "#046565",
          fontWeight: "bold",
          paddingBottom: 1,
        }}
      >
        Top Rated
      </Typography>
      <Swiper navigation={true} modules={[Navigation]}>
        {data?.results?.map((x) => {
          return (
            <SwiperSlide className="shrink">
              <Card sx={{ width: 150 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={first_path + x.poster_path}
                    alt="green iguana"
                  />
                  <CardContent
                    sx={{ backgroundColor: "#2E2F2F", minHeight: 125 }}
                  >
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Grid>
  );
};

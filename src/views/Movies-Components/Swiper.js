import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { first_path } from "./Constants";
import Typography from "@mui/material/Typography";
export const MovieSwiper = ({data , handleRedirect}) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} slidesPerView={4}>
      {data?.results?.map((x) => {
        return (
          <SwiperSlide className="shrink">
            <Card sx={{ width: 140 }} onClick={() => handleRedirect(x)}>
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
  );
};

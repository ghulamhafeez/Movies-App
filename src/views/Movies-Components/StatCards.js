import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import {
  useGetPopularMoviesQuery,
  useGetUpCommingMoviesQuery,
} from "../../services/MovieServices";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export const StatCards = () => {
  const navigate = useNavigate();
  const {  data =[] } = useGetPopularMoviesQuery();
  const { data: UpCommingData = [] } = useGetUpCommingMoviesQuery();

  const redirectToPopular = () => {
    navigate(`/popular-movies`);
  };
  const redirectToUpComming = () => {
    navigate(`/upcomming-movies`);
  };
  return (
    <Grid item container pr={23} pt={3} gap={5} direction={"column"}>
      <Grid item>
        <Card sx={{ maxWidth: 350, bgcolor: "#2E2F2F", borderRadius: 3 }}>
          <CardContent>
            <Typography
              sx={{
                fontSize: 14,
                textAlign: "center",
                color: "#046565",
                fontWeight: "bold",
              }}
            >
              Popular Movies
            </Typography>

            {data?.results?.slice(0, 3).map((x) => {
              return (
                <Card sx={{ width: 300, bgcolor: "#3B3B3B", borderRadius: 3 }}>
                  <CardContent sx={{ display: "flex" }}>
                    <Typography
                      sx={{
                        fontSize: 12,
                        textAlign: "center",
                        color: "White",
                        fontWeight: "bold",
                      }}
                    >
                      {x.title}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}

            <CardActions sx={{ pl: 12, pt: 3 }}>
              <Button
                size="small"
                sx={{
                  borderRadius: 2,
                  bgcolor: "#008080",
                  color: "black",
                  fontSize: 11,
                }}
                onClick={() => redirectToPopular()}
              >
                More
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 350, bgcolor: "#2E2F2F", borderRadius: 3 }}>
          <CardContent>
            <Typography
              sx={{
                fontSize: 14,
                textAlign: "center",
                color: "#046565",
                fontWeight: "bold",
              }}
            >
              Upcomming Movies
            </Typography>
            {UpCommingData?.results?.slice(0, 3).map((x) => {
              return (
                <Card sx={{ width: 300, bgcolor: "#3B3B3B", borderRadius: 3 }}>
                  <CardContent sx={{ display: "flex" }}>
                    <Typography
                      sx={{
                        fontSize: 12,
                        textAlign: "center",
                        color: "White",
                        fontWeight: "bold",
                      }}
                    >
                      {x.title}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
            <Typography variant="h5" component="div"></Typography>
            <CardActions sx={{ pl: 12, pt: 3 }}>
              <Button
                size="small"
                sx={{
                  borderRadius: 2,
                  bgcolor: "#008080",
                  color: "black",
                  fontSize: 11,
                  textAlign: "center",
                }}
                onClick={() => redirectToUpComming()}
              >
                More
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

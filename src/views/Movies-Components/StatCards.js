import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
export const StatCards = () => {
  return (
    <Grid item container pr={25} pt={3} gap={5} direction={"column"}>
      <Grid item>
        <Card sx={{ minWidth: 320, bgcolor: "#2E2F2F", borderRadius: 3 }}>
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
            <CardActions sx={{pl:13 ,pt:3}}>
              <Button
                size="small"
                sx={{
                  borderRadius: 2,
                  bgcolor: "#008080",
                  color: "black",
                  fontSize: 11,
                 
                }}
              >
                Home
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ minWidth: 320, bgcolor: "#2E2F2F", borderRadius: 3 }}>
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
            <Typography variant="h5" component="div"></Typography>
            <CardActions sx={{pl:13 ,pt:3}}>
            <Button
              size="small"
              sx={{
                borderRadius: 2,
                bgcolor: "#008080",
                color: "black",
                fontSize: 11,
                textAlign : "center"
              }}
            >
              Home
            </Button>
          </CardActions>
          </CardContent>
       
        </Card>
      </Grid>
    </Grid>
  );
};

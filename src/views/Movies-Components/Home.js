import { Grid } from "@mui/material";
import React from "react";

export const Home = () => {
  return (
    <Grid item>
         <Grid sx={{width:10 ,height:30}}>
      <img
        src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
        srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
        alt="A beautiful landscape."
        width="500" height="300"
      />
      </Grid>
      
    </Grid>
  );
};

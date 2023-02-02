import React, { useState } from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
export const SearchBar = () => {
  const [autoCompleteValue, setAutoCompleteValue] = useState();
  return (
    <Grid item pt={1}>
      <Autocomplete
          sx={{ width: 260 ,pl:142 }}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
         renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search Bar"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            value={autoCompleteValue}
            onChange={(e) => {
              setAutoCompleteValue(e.target.value);
            }}
            sx={{
                "& .Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white !important",
                    },
                  },
                "& .MuiOutlinedInput-root": {
                        height:'30px',
                        background:"grey",
                        padding: "0px 5px",
                        color:'white',
                    },
              }}
          />
          )}

         />
    </Grid>
  );
};

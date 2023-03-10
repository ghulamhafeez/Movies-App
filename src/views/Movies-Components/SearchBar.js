import React, { useState } from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useGetFindMoviesQuery } from "../../services/MovieServices";
import { useNavigate } from "react-router-dom";
export const SearchBar = () => {
  const [autoCompleteValue, setAutoCompleteValue] = useState();
  const { data = [] } = useGetFindMoviesQuery(autoCompleteValue);
  const navigate = useNavigate();
  const handleRedirect = (id) => {
    navigate(`/movies-detail/${id}`);
  };
  return (
    <Grid item pt={1}>
      <Autocomplete
        sx={{ width: 260, pl: 142 }}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={data?.results || []}
        getOptionLabel={(option) => (option?.title ? option?.title : "")}
        onChange={(option, value) => handleRedirect(value.id)}
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
                height: "30px",
                background: "grey",
                padding: "0px 5px",
                color: "white",
              },
            }}
          />
        )}
      />
    </Grid>
  );
};

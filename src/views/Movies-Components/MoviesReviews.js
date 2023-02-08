import React from "react";
import Typography from "@mui/material/Typography";
import { useGetMoviesReviewsQuery } from "../../services/MovieServices";
import { useParams } from "react-router-dom";

export const MoviesReviews = () => {
  const { id } = useParams();
  const { data } = useGetMoviesReviewsQuery(id);

  return (
    <>
      <Typography
        sx={{
          fontSize: 16,
          textAlign: "left",
          color: "#046565",
          fontWeight: "bold",
        }}
      >
        Reviews
      </Typography>

      {data?.results?.slice(0, 3).map((x) => {
        console.log("x", x);
        return (
          <>
            <Typography
              sx={{
                fontSize: 13,
                textAlign: "left",
                color: "#046565",
                fontWeight: "bold",
              }}
            >
              {x?.author}
            </Typography>

            <Typography
              sx={{
                fontSize: 11,
                textAlign: "left",
                color: "grey",
                fontWeight: "bold",
              }}
            >
              {x?.content}
            </Typography>
          </>
        );
      })}
    </>
  );
};

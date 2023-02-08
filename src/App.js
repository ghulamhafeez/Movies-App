import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./container/MainLayout";
import { Home } from "./views/Movies-Components/Home";
import { MoviesDetail } from "./views/Movies-Components/MoviesDetail";
import { UpcommingMovies } from "./views/Movies-Components/UpcommingMovies";
import { PopularMovies } from "./views/Movies-Components/PopularMovies";
import { store } from "./store/Store";
import { Provider } from "react-redux";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,

      children: [
        {
          path: ``,
          element: <Home />,
        },
        {
          path: `/popular-movies`,
          element: <PopularMovies />,
        },
        {
          path: `/upcomming-movies`,
          element: <UpcommingMovies />,
        },

        {
          path: `/movies-detail/:id`,
          element: <MoviesDetail />,
        },
      ],
    },
  ]);
  return (
    <div>
      <React.StrictMode>
        <Provider store={store}>
          <RouterProvider router={router}></RouterProvider>
        </Provider>
      </React.StrictMode>
    </div>
  );
};

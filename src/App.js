import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./container/MainLayout";
import { Main } from "./views/Movies-Components/Main";


export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,

      children: [
        {
          path: ``,
          element: <Main />,
        },
      ],
    },
  ]);
  return (
    <div>
      <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
      </React.StrictMode>
    </div>
  );
};



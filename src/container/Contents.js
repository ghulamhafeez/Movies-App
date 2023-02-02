import React from "react";
import { Outlet } from "react-router-dom";

export const Contents = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
import React from "react";
import CommentPage from "../pages/CommentPage";
import MainPage from "../pages/MainPage";

export const publicRoutes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/:id",
    element: <CommentPage />,
  },
];

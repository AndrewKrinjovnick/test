import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes } from "../../router";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;

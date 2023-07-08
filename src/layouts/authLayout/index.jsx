import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const accessToken = localStorage.getItem("token");

  if (accessToken) {
    return <Navigate to="/home" replace />;
  }

  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;

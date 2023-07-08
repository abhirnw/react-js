import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const DefaultLayout = () => {
  const accessToken = localStorage.getItem("token");

  if (!accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <div className="mb-auto overflow-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

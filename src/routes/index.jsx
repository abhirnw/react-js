import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/authLayout";
import DefaultLayout from "../layouts/defaultLayout";
import About from "../pages/About";
import Login from "../pages/authPages/Login";
import Contact from "../pages/Contact";
import FirebaseCrud from "../pages/FirebaseCrud";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Login />} />
          </Route>

          <Route element={<DefaultLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="firebaseCrud" element={<FirebaseCrud />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;

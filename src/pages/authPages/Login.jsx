import React from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  // login function
  const handleLogin = () => {
    localStorage.setItem("token", "123456789");
    window.location.reload();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <button className="buttonClass" onClick={() => handleLogin()}>
          Login
        </button>
      </div>
    </>
  );
};

export default Login;

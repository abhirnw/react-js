import React from "react";
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";

const Header = () => {
  // logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <div className="bg-indigo-400">
        <div className="flex justify-center items-center gap-10 text-2xl font-medium py-5">
          <Link to="/">
            <h4>Home</h4>
          </Link>
          <Link to="/about">
            <h4>About</h4>
          </Link>
          <Link to="/contact">
            <h4>Contact</h4>
          </Link>
          <Link to="/firebaseCrud">
            <h4>Firebase CRUD</h4>
          </Link>
          <IoMdLogOut
            size={25}
            className="cursor-pointer"
            onClick={() => handleLogout()}
          />
        </div>
      </div>
    </>
  );
};

export default Header;

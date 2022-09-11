import logo from "../Navbar/netflix.png";
import React, { useState } from "react";
import "./navbar.scss";
import users from "../Navbar/users.png";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={logo} alt="logo" />

          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/tvShows" className="link">
            <span>Tv Shows</span>
          </Link>
          <Link to="/Movies" className="link">
            <span>Movies</span>
          </Link>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icons" />
          <span>Kids</span>
          <Notifications className="icons" />
          <img src={users} alt="User" />
          <div className="profiles">
            <ArrowDropDown className="icons" />
            <div className="options">
              <span>settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

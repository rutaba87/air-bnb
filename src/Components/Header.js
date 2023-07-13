import React from "react";
import "../index.css";
import airbnb from "../Images/airbnb_logo.jpg";
export default function Header() {
  return (
    <div className="NavBar">
      <img className="nav_img" src={airbnb} alt="" />
    </div>
  );
}

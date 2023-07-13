import React from "react";
import "../index.css";
import photo_grid from "../Images/Grid Image.jpg";
export default function Main() {
  return (
    <div className="main">
      <img className="main-image" src={photo_grid} />
      <h2 className="main-heading">
        <b>Online Experiences</b>
      </h2>
      <p className="main-para">
        Join unique interactive activities led by one-of-a-kind host-all without
        leaving home
      </p>
    </div>
  );
}

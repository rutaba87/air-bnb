import React from "react";
import "../index.css";
import star from "../Images/star_img.jpg";
export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  } else {
    badgeText = " ";
  }

  return (
    <div className="card">
      <div className="card-img">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <img className="card-img" src={props.img} alt="Images" />
      </div>
      <div className="card-stats">
        <img className="rating_star" src={star} alt="star" />
        <span>{props.rating} </span>
        <span className="gray1">({props.reviewCount}) . </span>
        <span className="gray1"> {props.location} </span>
        <p className="card-title"> {props.title} </p>
        <p className="card-price">
          <span className="bold"> From ${props.price}</span> / Person
        </p>
      </div>
    </div>
  );
}

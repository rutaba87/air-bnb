import React from "react";
import Header from "../src/Components/Header";
import Main from "../src/Components/Main";
import Card from "../src/Components/Card";
import data from "./data";
import "./index.css";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        badgetext= {item.badgetext}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <div className="app">
      <Header />
      <Main />
      <section className="card-list">{cards}</section>
    </div>
  );
}

export default App;

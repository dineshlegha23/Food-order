import React from "react";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import TopDishes from "../components/TopDishes";
import AppDownload from "../components/AppDownload";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Explore />
      <TopDishes />
      <AppDownload />
    </>
  );
};

export default Homepage;

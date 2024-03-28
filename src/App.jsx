import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import TopDishes from "./components/TopDishes";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Explore />
      <TopDishes />
    </div>
  );
}

export default App;

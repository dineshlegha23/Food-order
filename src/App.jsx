import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import TopDishes from "./components/TopDishes";
import AppDownload from "./components/AppDownload";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Explore />
      <TopDishes />
      <AppDownload />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Hero from "../components/Hero";
import HomeCatagories from "../components/HomeCatagories";
import HomeState from "../components/HomeState";
import Swiper from "../components/Swiper";

const Home = () => {
  return (
    <main>
      <div>
        <Hero />
        <HomeCatagories />
        <HomeState />
        <div className="px-4 md:px-8">
          <Swiper />
        </div>
      </div>
    </main>
  );
};

export default Home;

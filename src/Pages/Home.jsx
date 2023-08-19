import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Header from "../components/Header";
import { useState } from "react";

const Home = () => {  

  return (
    <div className="">
      <div className="overflow-hidden">
        <Header />
        <Categories />
        <Footer />        
      </div>
    </div>
  );
};

export default Home;
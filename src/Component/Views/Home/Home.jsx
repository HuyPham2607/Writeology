import React from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import LayoutContent from "../../Layouts/LayoutContent/LayoutContent";
import MainPost from "../../Layouts/MainPost/MainPost";
import Subscribe from "../../Layouts/Subscribe/Subscribe";
import Footer from "../../Layouts/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <LayoutContent />
      <MainPost />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;

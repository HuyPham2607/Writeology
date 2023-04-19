import React from "react";
import SideBarStyleGuides from "./Components/SideBarStyleGuides/SideBarStyleGuides";
import ContentStyleGuides from "./Components/ContentStyleGuides/ContentStyleGuides";
import Footer from "../../Layouts/Footer/Footer";
import "./StyleGuides.css";
const StyleGuides = () => {
  return (
    <>
      <div className="style-guides">
        <SideBarStyleGuides />
        <ContentStyleGuides />
      </div>
      <Footer />
    </>
  );
};

export default StyleGuides;

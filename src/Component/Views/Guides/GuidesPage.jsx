import React from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import MainPost from "../../Layouts/MainPost/MainPost";
import Footer from "../../Layouts/Footer/Footer";

const GuidesPage = () => {
  const arraydata = [
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe4dc00fdd48ad3d67254_productivity-plan-thumbnail-blog-writelogy-x-webflow-template--p-500.jpeg",
      h5: "GUIDES",
      h3: "How to create an organized productivity plan for the year",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe33779b3d5971674d153_project-management-thumbnail-blog-writelogy-x-webflow-template--p-500.jpeg",
      h5: "GUIDES",
      h3: "A complete guide to learn project management",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
  ];
  return (
    <>
      <Navbar />
      <MainPost props={arraydata} />
      <Footer />
    </>
  );
};

export default GuidesPage;

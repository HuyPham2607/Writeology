import React from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import MainPost from "../../Layouts/MainPost/MainPost";
import Footer from "../../Layouts/Footer/Footer";

const ResourcesPage = () => {
  const arraydata = [
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe96825e3ea16e4fbacb5_productivity-apps-thumbnail-blog-writelogy-x-webflow-template-p-500.jpeg",
      h5: "RESOURCES",
      h3: "10 productivity tools that are worth checking out",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe78a9617508689d8697b_ipad-apps-thumbnail-blog-writelogy-x-webflow-template-p-500.jpeg",
      h5: "RESOURCES",
      h3: "7 great productivity apps for your new iPad",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abfe89ab6b229bab1ed420_management-software-featured-blog-writelogy-x-webflow-template-p-500.jpeg",
      h5: "RESOURCES",
      h3: "How to choose the best management software resources",
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

export default ResourcesPage;

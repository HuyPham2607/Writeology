import React from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import LayoutContent from "../../Layouts/LayoutContent/LayoutContent";
import MainPost from "../../Layouts/MainPost/MainPost";
import Subscribe from "../../Layouts/Subscribe/Subscribe";
import Footer from "../../Layouts/Footer/Footer";

const Home = () => {
  const array = [
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe99991773809b3eb0313_management-thumbnail-blog-writelogy-x-webflow-template-p-500.jpeg",
      bgimg:
        "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe99cab6b2214791e55d3_management-featured-blog-writelogy-x-webflow-template-.jpg",
      h5: "TIPS",
      h3: "How to choose the best management software",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe96825e3ea16e4fbacb5_productivity-apps-thumbnail-blog-writelogy-x-webflow-template-p-500.jpeg",
      bgimg:
        "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe965c2cea8a039c68de5_productivity-apps-featured-blog-writelogy-x-webflow-template.jpeg",
      h5: "Resources",
      h3: "10 productivity tools that are worth checking out",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe8525409f6f9c1c7ab22_avoid-distractions-thumbnail-blog-writelogy-x-webflow-template--p-500.jpeg",
      bgimg:
        "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe8587144683250011340_avoid-distractions-featured-blog-writelogy-x-webflow-template-.jpg",
      h5: "TIPS",
      h3: "3 tips to avoid Internet distractions at work",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe78a9617508689d8697b_ipad-apps-thumbnail-blog-writelogy-x-webflow-template-p-500.jpeg",
      bgimg:
        "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe7fe6e8040c83c34fe22_ipad-apps-featured-blog-writelogy-x-webflow-template.jpeg",
      h5: "Resources",
      h3: "7 great productivity apps for your new iPad",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe4dc00fdd48ad3d67254_productivity-plan-thumbnail-blog-writelogy-x-webflow-template--p-500.jpeg",
      bgimg:
        "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe4df988290595ba76ae5_productivity-plan-featured-blog-writelogy-x-webflow-template-.jpg",
      h5: "Guides",
      h3: "How to create an organized productivity plan for the year",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
  ];
  return (
    <>
      <Navbar />
      <LayoutContent />
      <MainPost props={array} />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import "./BlogPost.css";
import Footer from "../../Layouts/Footer/Footer";
import SideBarCarBlog from "../../SideBarCardBlog/SideBarCarBlog";
import RichText from "../../RichText/RichText";
import Subscribe from "../../Layouts/Subscribe/Subscribe";
import BackgroundHeadingBlog from "../../BackgroundHeadingBlog/BackgroundHeadingBlog";
const BlogPost = () => {
  const array = [
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe1c991773849cceae17c_time-tracking-thumbnail-blog-writelogy-x-webflow-template--p-500.jpeg",
      bgimg:
        "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe1c710a24f3d01eac299_time-tracking-featured-blog-writelogy-x-webflow-template-.jpg",
      h5: "TIPS",
      h3: "How time tracking can improve team management",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe33779b3d5971674d153_project-management-thumbnail-blog-writelogy-x-webflow-template--p-500.jpeg",
      bgimg:
        "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe33a3033c5a1d7fabb37_project-management-featured-blog-writelogy-x-webflow-template-.jpg",
      h5: "GUIDES",
      h3: "A complete guide to learn project management",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe3a09177383d10eae70a_collaboration-software-thumbnail-blog-writelogy-x-webflow-template--p-500.jpeg",
      bgimg:
        "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe39dc2cea8c420c66949_collaboration-software-featured-blog-writelogy-x-webflow-template-.jpg",
      h5: "TIPS",
      h3: "10 Best collaboration software for your team",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe99991773809b3eb0313_management-thumbnail-blog-writelogy-x-webflow-template-p-500.jpeg",
      bgimg:
        "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abfe82b839d11115e996e0_management-software-featured-blog-writelogy-x-webflow-template-.jpg",
      h5: "Resources",
      h3: "How to choose the best management software resources",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe9db6517db41e66bf261_digital-management-thumbnail-blog-writelogy-x-webflow-template-.jpg",
      bgimg:
        "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe9d9b2ea4b807fb2cc60_digital-management-featured-blog-writelogy-x-webflow-template-.jpg",
      h5: "TIPS",
      h3: "5 ways to improve your digital project management",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
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
      <BackgroundHeadingBlog props={array} />
      <div className="main-blog container-xl">
        <SideBarCarBlog />
        <RichText />
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default BlogPost;

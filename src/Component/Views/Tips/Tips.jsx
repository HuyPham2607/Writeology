import React from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import MainPost from "../../Layouts/MainPost/MainPost";
import Footer from "../../Layouts/Footer/Footer";

const Tips = () => {
  const arraydata = [
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe9db6517db41e66bf261_digital-management-thumbnail-blog-writelogy-x-webflow-template-.jpg",
      h5: "TIPS",
      h3: "5 ways to improve your digital project management",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe99991773809b3eb0313_management-thumbnail-blog-writelogy-x-webflow-template-p-500.jpeg",
      h5: "TIPS",
      h3: "How to choose the best management software",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe8525409f6f9c1c7ab22_avoid-distractions-thumbnail-blog-writelogy-x-webflow-template--p-500.jpeg",
      h5: "TIPS",
      h3: "3 tips to avoid Internet distractions at work",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe3a09177383d10eae70a_collaboration-software-thumbnail-blog-writelogy-x-webflow-template--p-500.jpeg",
      h5: "TIPS",
      h3: "10 Best collaboration software for your team",
      p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
    },
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe1c991773849cceae17c_time-tracking-thumbnail-blog-writelogy-x-webflow-template--p-500.jpeg",
      h5: "TIPS",
      h3: "How time tracking can improve team management",
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

export default Tips;

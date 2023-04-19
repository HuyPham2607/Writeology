import React from "react";
import { useNavigate } from "react-router-dom";
import imgResources from "../../Img/resources.jpg";
import Popular from "../Popular/Popular";
import "./SideBarCarBlog.css";

const SideBarCarBlog = () => {
  let navigate = useNavigate();
  function addDashToSpaces(text) {
    return text.replace(/\s+/g, "-");
  }
  const routeChangeBlogid = (id) => {
    let path = `/blog/${addDashToSpaces(id)}`;
    window.scrollTo(0, 0);
    navigate(path);
  };

  const routeChangePageID = (id) => {
    let path = `/${id}`;
    window.scrollTo(0, 0);
    navigate(path);
  };
  const array = [
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe3a09177383d10eae70a_collaboration-software-thumbnail-blog-writelogy-x-webflow-template--p-500.jpeg",
      h3: "10 Best collaboration software for your team",
    },
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe33779b3d5971674d153_project-management-thumbnail-blog-writelogy-x-webflow-template--p-500.jpeg",
      h3: "A complete guide to learn project management",
    },
    {
      img: "https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe1c991773849cceae17c_time-tracking-thumbnail-blog-writelogy-x-webflow-template--p-500.jpeg",
      h3: "How time tracking can improve team management",
    },
  ];
  return (
    <div className="sidebar">
      <div className="header-sidebar">
        <img
          src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62b0771916d7e54dbf05d255_logo-writeology-x-webflow-template.svg"
          alt=""
        />
        <p>
          Tellus id nisl blandit vitae quam magna nisl aliquet aliquam arcu
          ultricies commodo felisoler massa ipsum erat non sit amet.
        </p>
        <form action="">
          <input type="search" placeholder="Search articles" />
        </form>
      </div>
      <div className="line-under"></div>
      <div className="categories-wrapper-sidebar">
        <button onClick={() => routeChangePageID("tips")}>TIPS</button>
        <button onClick={() => routeChangePageID("resources")}>
          RESOURCES
        </button>
        <button onClick={() => routeChangePageID("guides")}>GUIDES</button>
      </div>
      <div
        className="sidebar-resources"
        onClick={() =>
          routeChangeBlogid(
            "How to choose the best management software resources"
          )
        }
      >
        <div className="bg-overlay-gradient">
          <img src={imgResources} alt="" />
        </div>
        <div className="inner-resources">
          <h4>Resources</h4>
          <h3>How to choose the best management software</h3>
        </div>
      </div>
      <div className="wrapper-popular">
        <h3>Popular articles</h3>
        {array.map((e, i) => (
          <Popular props={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SideBarCarBlog;

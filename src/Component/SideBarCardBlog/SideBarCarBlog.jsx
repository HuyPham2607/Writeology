import React from "react";
import "./SideBarCarBlog.css";
import imgResources from "../../Img/resources.jpg";
import Popular from "../Popular/Popular";
const SideBarCarBlog = () => {
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
        <button>TIPS</button>
        <button>RESOURCES</button>
        <button>GUIDES</button>
      </div>
      <div className="sidebar-resources">
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
        <Popular />
        <Popular />
        <Popular />
      </div>
    </div>
  );
};

export default SideBarCarBlog;

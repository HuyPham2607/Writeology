import React, { useEffect, useState } from "react";
import "./BackgroundHeadingBlog.css";
const BackgroundHeadingBlog = ({ props }) => {
  const [Content, setContent] = useState([]);
  useEffect(() => {
    const currentPathname = window.location.pathname.slice(6);
    const result = currentPathname.replace(/-/g, " ");
    const checkPath = props.filter((e) => {
      return e.h3 === result;
    });
    const background = document.getElementById("header-blog-post");
    background.style.backgroundImage = `url(${checkPath[0]?.bgimg})`;
    setContent(checkPath);
  }, [props]);
  return (
    <div className="header-blog-post" id="header-blog-post">
      <div className="container">
        <div className="content-img-blog-post">
          <div className="inner-content">
            <button>{Content[0]?.h5}</button>
            <h1>{Content[0]?.h3}</h1>
            <h3>User Time</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundHeadingBlog;

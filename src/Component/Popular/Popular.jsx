import React from "react";
import { useNavigate } from "react-router-dom";

import "./Popular.css";

const Popular = ({ props }) => {
  let navigate = useNavigate();
  function addDashToSpaces(text) {
    return text.replace(/\s+/g, "-");
  }
  const routeChangeBlogid = (id) => {
    let path = `/blog/${addDashToSpaces(id)}`;
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="popular" onClick={() => routeChangeBlogid(props.h3)}>
      <span>
        <img src={props.img} alt="" />
      </span>
      <h4>{props.h3}</h4>
    </div>
  );
};

export default Popular;

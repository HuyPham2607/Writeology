import React from "react";
import thumbnail from "../../../Img/62abe9db6517db41e66bf261-writelogy-x-webflow-template.jpg";
import { useNavigate } from "react-router-dom";

import "./LayoutContent.css";
const LayoutContent = () => {
  let navigate = useNavigate();
  const routeChangeBlogid = (id) => {
    let path = `/blog/${id}`;
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <section className="container-xl ">
      <div className="row">
        <div className="col-md-12 col-xl-8">
          <div
            className="content-thumbnail"
            onClick={() =>
              routeChangeBlogid(
                "5-ways-to-improve-your-digital-project-management"
              )
            }
          >
            <span>
              <button>TIPS</button>
              <h3>5 ways to improve your digital project management</h3>
              <h3>User Time</h3>
            </span>
            <img src={thumbnail} alt="" />
          </div>
        </div>
        <div className="col-md-12 col-lg-4 content-inner">
          <div className="row">
            <span
              onClick={() =>
                routeChangeBlogid("How-to-choose-the-best-management-software")
              }
            >
              <h3>TIPS</h3>
              <h4>How to choose the best management software</h4>
            </span>
          </div>
          <div className="row">
            <span
              onClick={() =>
                routeChangeBlogid(
                  "3-tips-to-avoid-Internet-distractions-at-work"
                )
              }
            >
              <h3>TIPS</h3>
              <h4>3 tips to avoid Internet distractions at work</h4>
            </span>
          </div>
          <div className="row">
            <span
              onClick={() =>
                routeChangeBlogid("7-great-productivity-apps-for-your-new-iPad")
              }
            >
              <h3>Resources</h3>
              <h4>7 great productivity apps for your new iPad</h4>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutContent;

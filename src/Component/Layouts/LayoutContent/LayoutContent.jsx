import React from "react";
import thumbnail from "../../../Img/62abe9db6517db41e66bf261-writelogy-x-webflow-template.jpg";
import "./LayoutContent.css";
const LayoutContent = () => {
  return (
    <section className="container-xl ">
      <div className="row">
        <div className="col-md-12 col-xl-8">
          <div className="content-thumbnail">
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
            <span>
              <h3>TIPS</h3>
              <h4>How to choose the best management software</h4>
            </span>
          </div>
          <div className="row">
            <span>
              <h3>TIPS</h3>
              <h4>3 tips to avoid Internet distractions at work</h4>
            </span>
          </div>
          <div className="row">
            <span>
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

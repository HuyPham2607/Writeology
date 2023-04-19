import React from "react";
import "./MainPost.css";
import CardBlog from "../../CardBlog/CardBlog";
import SideBarCarBlog from "../../SideBarCardBlog/SideBarCarBlog";
const MainPost = ({ props }) => {
  return (
    <section className="container-xl main-post">
      <div className="row">
        <div className="col-md-12 col-xl-8">
          <div className="col">
            <h2>Lastest articles</h2>
            <div className="row cardblog">
              {props.map((e, i) => (
                <CardBlog props={e} key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-12 col-xl-4">
          <SideBarCarBlog />
        </div>
      </div>
    </section>
  );
};

export default MainPost;

import React from "react";
import HowToChose from "../../../Img/HowToChose.jpg";
import "./MainPost.css";
import CardBlog from "../../CardBlog/CardBlog";
import SideBarCarBlog from "../../SideBarCardBlog/SideBarCarBlog";
const MainPost = () => {
  const props = {
    img: HowToChose,
    h5: "TIPSsss",
    h3: "How to choose the best management software",
    p: "Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.",
  };
  return (
    <section className="container-xl main-post">
      <div className="row">
        <div className="col-md-12 col-xl-8">
          <div className="col">
            <h2>Lastest articles</h2>
            <div className="row cardblog">
              <CardBlog props={props} />
              <CardBlog props={props} />
              <CardBlog props={props} />
              <CardBlog props={props} />
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

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faClock, faUser } from "@fortawesome/free-regular-svg-icons";
import "./CardBlog.css";
const CardBlog = ({ props }) => {
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
    <div
      className="card mb-3"
      style={{ border: "none" }}
      onClick={() => routeChangeBlogid(props.h3)}
    >
      <div className="row g-0">
        <div className="col-md-12 col-xl-6 card-thumbnail-img">
          <img src={props.img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-12 col-xl-6 card-item">
          <div className="card-body">
            <h5 className="card-title">{props.h5}</h5>
            <h3>{props.h3}</h3>
            <p className="card-text">{props.p}</p>
            <div className="card-detail">
              <span>
                <FontAwesomeIcon icon={faUser} style={{ color: "#000000" }} />
                <p>USER</p>
              </span>
              <span>
                <FontAwesomeIcon icon={faClock} style={{ color: "#000000" }} />
                <p>June 18, 2020</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;

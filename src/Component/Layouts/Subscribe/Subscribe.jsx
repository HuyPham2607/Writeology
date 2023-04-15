import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div className="wrapper-subscribe">
      <div className="subscribe">
        <div className="text-center">
          <h2>Subscribe to unlock premium content</h2>
          <p>
            Sed at tellus, pharetra lacus, aenean risus non nisl ultricies
            commodo diam aliquet arcu enim eu leo porttitor habitasse adipiscing
            porttitor varius ultricies facilisis viverra lacus neque.
          </p>
        </div>
        <div className="list-item">
          <span>
            <div className="bg-overlay-gradient">
              <img
                src="https://assets.website-files.com/62abc23e594f83d9d66b136f/62b277391fbbeb861ecc93ea_agile-development-thumbnail-blog-writelogy-x-webflow-template.jpeg"
                alt=""
              />
            </div>
            <div className="inner-resources">
              <h4>Resources</h4>
              <h3>How to choose the best management software</h3>
            </div>
          </span>
          <span>
            <div className="bg-overlay-gradient">
              <img
                src="https://assets.website-files.com/62abc23e594f83d9d66b136f/62b277391fbbeb861ecc93ea_agile-development-thumbnail-blog-writelogy-x-webflow-template.jpeg"
                alt=""
              />
            </div>
            <div className="inner-resources">
              <h4>Resources</h4>
              <h3>How to choose the best management software</h3>
            </div>
          </span>
          <span>
            <div className="bg-overlay-gradient">
              <img
                src="https://assets.website-files.com/62abc23e594f83d9d66b136f/62b277391fbbeb861ecc93ea_agile-development-thumbnail-blog-writelogy-x-webflow-template.jpeg"
                alt=""
              />
            </div>
            <div className="inner-resources">
              <h4>Resources</h4>
              <h3>How to choose the best management software</h3>
            </div>
          </span>
        </div>
        <div className="bg-overlay-subscribe">
          <button>Unlock content</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

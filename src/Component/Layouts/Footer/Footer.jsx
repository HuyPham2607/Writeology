import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="container-xl">
      <div className="footer-top">
        <div className="text-center">
          <h3>Subscribe to our newsletter</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus
            amet dui quam vitae quis leo velit aliquam.
          </p>
          <form action="">
            <input type="seacrh" placeholder="Enter your email address" />
            <button type="button" className="btn btn-dark">
              Subscribe
            </button>
          </form>
          <span>
            <FontAwesomeIcon
              className="icon"
              icon={faFacebookF}
              style={{ color: "#000000" }}
            />
            <FontAwesomeIcon
              className="icon"
              icon={faTwitter}
              style={{ color: "#000000" }}
            />
            <FontAwesomeIcon
              className="icon"
              icon={faInstagram}
              style={{ color: "#000000" }}
            />
            <FontAwesomeIcon
              className="icon"
              icon={faLinkedinIn}
              style={{ color: "#000000" }}
            />
            <FontAwesomeIcon
              className="icon"
              icon={faYoutube}
              style={{ color: "#000000" }}
            />
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright © Writeology X | Designed by <u>BRIX Templates</u> - Powered
          by <u>Webflow</u>
        </p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  function openNewTab(url) {
    window.open(url, "_blank");
  }
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
              onClick={() => openNewTab("https://www.facebook.com/PNG.Huy/")}
              className="icon"
              icon={faFacebookF}
              style={{ color: "#000000" }}
            />
            <FontAwesomeIcon
              onClick={() => openNewTab("https://github.com/HuyPham2607")}
              className="icon"
              icon={faGithub}
              style={{ color: "#000000" }}
            />
            <FontAwesomeIcon
              onClick={() => openNewTab("https://www.instagram.com/png_huy/")}
              className="icon"
              icon={faInstagram}
              style={{ color: "#000000" }}
            />
            <FontAwesomeIcon
              onClick={() =>
                openNewTab("https://www.linkedin.com/in/huy-pham-822b2b24b/")
              }
              className="icon"
              icon={faLinkedinIn}
              style={{ color: "#000000" }}
            />
            <FontAwesomeIcon
              onClick={() => openNewTab("https://www.youtube.com")}
              className="icon"
              icon={faYoutube}
              style={{ color: "#000000" }}
            />
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright © Writeology X | Designed by <u>BRIX Templates</u> - Cover
          by{" "}
          <u onClick={() => openNewTab("https://github.com/HuyPham2607")}>
            Huy Pham
          </u>
        </p>
      </div>
    </div>
  );
};

export default Footer;

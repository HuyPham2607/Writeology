import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronDown,
  faChevronUp,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const buttonRef = useRef(null);
  const buttonPages = useRef(null);
  const buttonCategories = useRef(null);

  const HandleUser = () => {
    if (showOptions === true) {
      setShowOptions(false);
    } else {
      setShowOptions(true);
    }
  };

  useEffect(
    () => {
      function handleClickOutside(event) {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
          setShowOptions(false);
        }
        if (
          buttonPages.current &&
          !buttonPages.current.contains(event.target)
        ) {
          setShowPages(false);
        }
        if (
          buttonCategories.current &&
          !buttonCategories.current.contains(event.target)
        ) {
          setShowCategories(false);
        }
      }

      function handleKeyPress(event) {
        if (event.key === "Escape") {
          setShowOptions(false);
          setShowPages(false);
          setShowCategories(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyPress);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleKeyPress);
      };
    },
    [buttonRef],
    [buttonPages],
    [buttonCategories]
  );

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  const handleMousePages = () => {
    setShowPages(true);
  };

  const handleMouseLeavePages = () => {
    setShowPages(false);
  };

  const handleMousCategories = () => {
    setShowCategories(true);
  };

  const handleMouseLeaveCategories = () => {
    setShowCategories(false);
  };

  const handleOpenMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="container-xl" style={{ backgroundColor: "#ffff" }}>
        <div className="nav-header">
          <span className="icons-link">
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{ color: "#000000" }}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "#000000" }}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#000000", fontWeight: "1000" }}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{ color: "#000000" }}
                />
              </li>
            </ul>
          </span>
          <span className="logo-header">
            <span>
              <img
                src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62b0771916d7e54dbf05d255_logo-writeology-x-webflow-template.svg"
                alt=""
              />
            </span>
          </span>
          <span>
            <ul>
              <li>Cart (1)</li>
              <li
                ref={buttonRef}
                onClick={() => HandleUser()}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <FontAwesomeIcon icon={faUser} style={{ color: "#000000" }} />
                {showOptions ? (
                  <FontAwesomeIcon
                    className="icon-up"
                    icon={faChevronUp}
                    style={{ color: "#000000" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="icon-down"
                    icon={faChevronDown}
                    style={{ color: "#000000" }}
                  />
                )}
                {showOptions && (
                  <div className="btn-options">
                    <button>Login</button>
                    <button>Account</button>
                  </div>
                )}
              </li>
              <li className="icon-search">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "#c7c7c7" }}
                />
              </li>
              <span>
                <span
                  onClick={handleOpenMenu}
                  className={showMenu ? "toggle-btn active" : "toggle-btn"}
                ></span>
              </span>
            </ul>
          </span>
        </div>
        <div className={`${showMenu ? "router-header open" : "router-header"}`}>
          <ul>
            <li>HOME</li>
            <li
              onMouseEnter={handleMousePages}
              onMouseLeave={handleMouseLeavePages}
            >
              PAGES
              <FontAwesomeIcon
                className={showPages ? "icon-up" : "icon-down"}
                icon={faChevronDown}
                style={{ color: "#000000" }}
              />
              <ul className={showPages ? "pages open" : "pages"}>
                <ul>
                  <li>
                    <strong>PAGES</strong>
                  </li>
                  <li>Home</li>
                  <li>Home (Premium)</li>
                  <li>Blog Post</li>
                  <li>Blog Post (Premium)</li>
                  <li>Subscribe</li>
                  <li>Sign In</li>
                  <li>Sign up</li>
                  <li>Update password</li>
                  <li>Reset password</li>
                  <li>Access Denied</li>
                  <li>User account</li>
                </ul>
                <ul>
                  <li>
                    <strong>UTILITY PAGES</strong>
                  </li>
                  <li>Start here</li>
                  <li>Styleguide</li>
                  <li>404 Not found</li>
                  <li>Password protected</li>
                  <li>Licenses</li>
                  <li>Changelog</li>
                  <li>
                    <strong>BROWSE MORE TEMPLATES</strong>
                  </li>
                </ul>
              </ul>
            </li>
            <li
              onMouseEnter={handleMousCategories}
              onMouseLeave={handleMouseLeaveCategories}
            >
              CATEGORIES
              <FontAwesomeIcon
                className={showCategories ? "icon-up" : "icon-down"}
                icon={faChevronDown}
                style={{ color: "#000000" }}
              />
              <ul className={showCategories ? "categories open" : "categories"}>
                <li>Tips</li>
                <li>Resources</li>
                <li>Guides</li>
              </ul>
            </li>
            <li>CONTACT</li>
            <li>SUBSCRIBE</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

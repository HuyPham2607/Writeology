import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronDown,
  faChevronUp,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  let navigate = useNavigate();
  const routeChangeHome = () => {
    let path = `/`;
    window.scrollTo(0, 0);
    navigate(path);
  };
  const routeChangeHomePre = () => {
    let path = `/home-premium`;
    window.scrollTo(0, 0);
    navigate(path);
  };

  const routeChangeBlog = () => {
    let path = `/blog/How-to-choose-the-best-management-software`;
    window.scrollTo(0, 0);
    navigate(path);
  };
  const routeChangeBlogPre = () => {
    let path = `/blog-premium`;
    window.scrollTo(0, 0);
    navigate(path);
  };
  const routeChangeSubscribePage = () => {
    let path = `/subscribe`;
    window.scrollTo(0, 0);
    navigate(path);
  };
  const routeChangeContact = () => {
    let path = `/contact`;
    window.scrollTo(0, 0);
    navigate(path);
  };

  const routeChangeLogin = () => {
    let path = `/log-in`;
    window.scrollTo(0, 0);
    navigate(path);
  };
  const routeChangeSignUp = () => {
    let path = `/sign-up`;
    window.scrollTo(0, 0);
    navigate(path);
  };

  const routeChangeTips = () => {
    let path = `/tips`;
    window.scrollTo(0, 0);
    navigate(path);
  };
  const routeChangeResources = () => {
    let path = `/resources`;
    window.scrollTo(0, 0);
    navigate(path);
  };
  const routeChangeGuides = () => {
    let path = `/guides`;
    window.scrollTo(0, 0);
    navigate(path);
  };
  const routeChangeStartHerePage = () => {
    let path = `/start-here`;
    window.scrollTo(0, 0);
    navigate(path);
  };

  const routeChangeStartStyleGuidesPage = () => {
    let path = `/style-guides`;
    window.scrollTo(0, 0);
    navigate(path);
  };

  function openNewTab(url) {
    window.open(url, "_blank");
  }

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
              <li
                onClick={() => openNewTab("https://www.facebook.com/PNG.Huy/")}
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{ color: "#000000" }}
                />
              </li>
              <li onClick={() => openNewTab("https://github.com/HuyPham2607")}>
                <FontAwesomeIcon icon={faGithub} style={{ color: "#000000" }} />
              </li>
              <li
                onClick={() => openNewTab("https://www.instagram.com/png_huy/")}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#000000", fontWeight: "1000" }}
                />
              </li>
              <li
                onClick={() =>
                  openNewTab("https://www.linkedin.com/in/huy-pham-822b2b24b/")
                }
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{ color: "#000000" }}
                />
              </li>
            </ul>
          </span>
          <span className="logo-header">
            <span onClick={() => routeChangeHome()}>
              <img
                src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62b0771916d7e54dbf05d255_logo-writeology-x-webflow-template.svg"
                alt=""
              />
            </span>
          </span>
          <span>
            <ul>
              <li className="cart">Cart (1)</li>
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
                    <button onClick={() => routeChangeLogin()}>Login</button>
                    <button>Account</button>
                  </div>
                )}
              </li>
              <li className="icon-search">
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ color: "#c7c7c7" }}
                  />
                </button>

                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title" id="staticBackdropLabel">
                          Search for articles
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <input type="text" />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
            <li onClick={() => routeChangeHome()}>HOME</li>
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
                  <li onClick={() => routeChangeHome()}>Home</li>
                  <li onClick={() => routeChangeHomePre()}>Home (Premium)</li>
                  <li onClick={() => routeChangeBlog()}>Blog Post</li>
                  <li onClick={() => routeChangeBlogPre()}>
                    Blog Post (Premium)
                  </li>
                  <li onClick={() => routeChangeSubscribePage()}>Subscribe</li>
                  <li onClick={() => routeChangeContact()}>Contact</li>
                  <li onClick={() => routeChangeLogin()}>Sign In</li>
                  <li onClick={() => routeChangeSignUp()}>Sign up</li>
                </ul>
                <ul>
                  <li>
                    <strong>UTILITY PAGES</strong>
                  </li>
                  <li onClick={() => routeChangeStartHerePage()}>Start here</li>
                  <li onClick={() => routeChangeStartStyleGuidesPage()}>
                    Styleguide
                  </li>
                  <li
                    onClick={() => openNewTab("https://github.com/HuyPham2607")}
                  >
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
                <li onClick={() => routeChangeTips()}>Tips</li>
                <li onClick={() => routeChangeResources()}>Resources</li>
                <li onClick={() => routeChangeGuides()}>Guides</li>
              </ul>
            </li>
            <li onClick={() => routeChangeContact()}>CONTACT</li>
            <li onClick={() => routeChangeSubscribePage()}>SUBSCRIBE</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./SideBarStyleGuides.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link, scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";

const SideBarStyleGuides = () => {
  const [dropdownbasic, setDropdownBasic] = useState(false);
  const [dropdownCPM, setDropdownCPM] = useState(false);

  const HandleToggleBasic = () => {
    setDropdownBasic(!dropdownbasic);
  };
  const HandleToggleCPM = () => {
    setDropdownCPM(!dropdownCPM);
  };
  let navigate = useNavigate();
  const routeChangeHome = () => {
    let path = `/`;
    window.scrollTo(0, 0);
    navigate(path);
  };

  function openNewTab(url) {
    window.open(url, "_blank");
  }
  return (
    <div className="wrapper-guides">
      <div className="logo-header" onClick={() => routeChangeHome()}>
        <img
          src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62b0771916d7e54dbf05d255_logo-writeology-x-webflow-template.svg"
          alt=""
        />
      </div>
      <div className="sidebar-guides">
        <ul>
          <li className="basic" onClick={() => HandleToggleBasic()}>
            <span>
              Basic styles
              <FontAwesomeIcon
                className={dropdownbasic ? "icon-open" : "icon-close"}
                icon={faChevronRight}
                style={{ color: "#000000" }}
              />
            </span>
          </li>
          <ul className={dropdownbasic ? "dropdown open" : "dropdown"}>
            <Link
              style={{ textDecoration: "none" }}
              activeClass="active"
              to="Colors"
              spy={true}
              offset={-70}
              duration={500}
              onClick={() => scroller.scrollTo("Colors", {})}
            >
              <li>
                <div className="img">
                  <img
                    src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62abc23e594f8356476b1382_colors-icon-style-guide-brix-templates.svg"
                    alt=""
                  />
                </div>
                Colors
              </li>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              activeClass="active"
              to="Typography"
              spy={true}
              offset={-70}
              duration={500}
              onClick={() => scroller.scrollTo("Typography", {})}
            >
              <li>
                <div className="img">
                  <img
                    src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62abc23e594f832c7e6b1396_typography-icon-style-guide-brix-templates.svg"
                    alt=""
                  />
                </div>
                Typography
              </li>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              activeClass="active"
              to="Shadows"
              spy={true}
              offset={-70}
              duration={500}
              onClick={() => scroller.scrollTo("Shadows", {})}
            >
              <li>
                <div className="img">
                  <img
                    src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62abc23e594f832d516b13c9_shadows-icon-style-guide-brix-templates.svg"
                    alt=""
                  />
                </div>
                Shadows
              </li>
            </Link>
          </ul>
          <li className="cpm" onClick={() => HandleToggleCPM()}>
            <span>
              Components
              <FontAwesomeIcon
                className={dropdownCPM ? "icon-open" : "icon-close"}
                icon={faChevronRight}
                style={{ color: "#000000" }}
              />
            </span>
          </li>
          <ul className={dropdownCPM ? "dropdown open" : "dropdown"}>
            <Link
              style={{ textDecoration: "none" }}
              activeClass="active"
              to="Buttons"
              spy={true}
              offset={-70}
              duration={500}
              onClick={() => scroller.scrollTo("Buttons", {})}
            >
              <li>
                <div className="img">
                  <img
                    src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62abc23e594f83d04e6b137b_buttons-icon-style-guide-brix-templates.svg"
                    alt=""
                  />
                </div>
                Buttons
              </li>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              activeClass="active"
              to="Links"
              spy={true}
              offset={-70}
              duration={500}
              onClick={() => scroller.scrollTo("Links", {})}
            >
              <li>
                <div className="img">
                  <img
                    src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62abc23e594f83f9376b13de_links-icon-style-guide-brix-templates.svg"
                    alt=""
                  />
                </div>
                Links
              </li>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              activeClass="active"
              to="Inputs"
              spy={true}
              offset={-70}
              duration={500}
              onClick={() => scroller.scrollTo("Inputs", {})}
            >
              <li>
                <div className="img">
                  <img
                    src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62abc23e594f8343b56b1387_inputs-icon-style-guide-brix-templates.svg"
                    alt=""
                  />
                </div>
                Inputs
              </li>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              activeClass="active"
              to="Icons"
              spy={true}
              offset={-70}
              duration={500}
              onClick={() => scroller.scrollTo("Icons", {})}
            >
              <li>
                <div className="img">
                  <img
                    src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62abc23e594f83d6166b1381_icons-icon-style-guide-brix-templates.svg"
                    alt=""
                  />
                </div>
                Icons
              </li>
            </Link>
          </ul>
        </ul>
        <div className="btn-bottom">
          <button
            onClick={() =>
              openNewTab("https://github.com/HuyPham2607/Writeology")
            }
          >
            Get template
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBarStyleGuides;

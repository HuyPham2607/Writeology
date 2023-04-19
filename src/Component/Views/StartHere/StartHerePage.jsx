import React from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import ContentStartHere from "../../ContentStartHere/ContentStartHere";
import Footer from "../../Layouts/Footer/Footer";
import { useNavigate } from "react-router-dom";

import "./StartHerePage.css";
const StartHere = () => {
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
    <>
      <div>
        <Navbar />
        <section className="start-here">
          <div className="container text-center default">
            <h1>Start here</h1>
            <p>
              If you just purchased Writeology X Webflow Ecommerce Template and
              are looking for the basics on how to get started editing it, start
              here.
            </p>
            <div className="grp-btn">
              <button
                onClick={() => openNewTab("https://github.com/HuyPham2607")}
              >
                Get template
              </button>
              <button className="go-home" onClick={() => routeChangeHome()}>
                Go back home
              </button>
            </div>
          </div>
        </section>
        <div className="container">
          <ContentStartHere />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default StartHere;

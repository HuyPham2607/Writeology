import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./GetInTouch.css";
const GetInTouch = () => {
  return (
    <section className="section-mobile">
      <div className="container get-in-touch">
        <div className="contact-us">
          <h1>Get in touch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
            adipiscing tincidunt interdum tellus du.
          </p>
          <div className="via">Contact us via:</div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#000000" }} />
              contact@writelogy.com
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#000000" }} />
              press@writelogy.com
            </li>
          </ul>
        </div>
        <div className="form-contact">
          <form action="">
            <div>
              <label htmlFor="name">FULL NAME</label>
              <input type="text" name="name" placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="address">EMAIL ADDRESS</label>
              <input
                type="text"
                name="address"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="phone">PHONE</label>
              <input type="text" name="phone" placeholder="+84 01234567" />
            </div>
            <div>
              <label htmlFor="subject">SUBJECT</label>
              <input type="text" name="subject" placeholder="Enter Subject" />
            </div>
            <div className="text-area">
              <label htmlFor="message">LEAVE US A MESSAGE</label>
              <textarea
                className="w-input"
                type="text"
                name="message"
                placeholder="Message"
              />
            </div>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

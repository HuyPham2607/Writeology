import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./RichText.css";
const RichText = () => {
  return (
    <div className="richtext">
      <h2>Not getting distracted on Internet is quite a challenge</h2>
      <p>
        Metus morbi pretium enim quisque enim elit risus venenatis nunc donec
        ante non dictum lorem bibendum dictum lacus urna arcu
        <strong>venenatis scelerisque vitae</strong> etiam in gravida egestas
        integer posuere in elementum purus libero pulvinar egestas magnis
        laoreet justo mi ornare feugiat gravida eu enim etiam gravida sit non in
        enim suspendisse nec lectus quis.
      </p>
      <ul>
        <li>
          Lobortis elit sit cum orci aenean consectetur augue morbi mi mattis
          hendrerit at pretium.
        </li>
        <li>
          Quis pharetra odio duis vitae felis fames lacus et nunc, at nibh est
          tortor pellentesque.
        </li>
        <li>
          Duis facilisis aliquet at lacus cras cras aliquam in velit imperdiet
          sapien in pharetra quisque.
        </li>
      </ul>
      <p>
        Morbi congue cum amet, consequat mi scelerisque.
        <u>Scelerisque lectus ultrices</u> mi iaculis et morbi tortor. Tincidunt
        pulvinar aliquam egestas id dignissim vitae, est. Mi in vestibulum nunc,
        vivamus tortor in id tortor adipiscing. Vulputate semper ultricies amet
        elit ante amet. Pellentesque dictum facilisi purus ut. Molestie urna,
        quis eu nunc a semper et aliquet. Eu est.
      </p>
      <h3>There are great tools to help you with that</h3>
      <p>
        Eu bibendum gravida dignissim cras massa tristique velit aliquam velit.
        Pellentesque id posuere a cursus. Vel diam donec id eu. Proin et
        tristique tortor mattis convallis urna.
      </p>
      <ul>
        <li>
          Lobortis elit sit cum orci aenean consectetur augue morbi mi mattis
          hendrerit at pretium.
        </li>
        <li>
          Quis pharetra odio duis vitae felis fames lacus et nunc, at nibh est
          tortor pellentesque.
        </li>
        <li>
          Duis facilisis aliquet at lacus cras cras aliquam in velit imperdiet
          sapien in pharetra quisque.
        </li>
      </ul>
      <h4>3 great tools to block unwanted distractions</h4>
      <p>
        Sit porttitor potenti nisl, proin penatibus. Velit etiam ac commodo
        faucibus nunc eu quis integer. Quis egestas lorem sit a non. Urna sem
        sapien facilisis lorem egestas adipiscing nulla nulla. Magna aliquam at
        sodales facilisi tellus consectetur ultricies. Id dignissim nisi ac
        elit. Vel et justo dis eros id. Magna morbi elit fusce facilisi
        hendrerit turpis mattis aliquam mattis. Proin mauris.
      </p>
      <blockquote>
        “At vitae elementum eu feugiat eleifend bibendum euismod ac purus
        feugiat consequat sed consequat mauris vitae adipiscing blandit integer
        nec quis nulla.”
      </blockquote>
      <p>
        Felis aliquet risus cursus mi laoreet suspendisse sed. Mattis morbi
        mattis erat at malesuada dignissim accumsan tellus. Arcu et sollicitudin
        facilisis sit dignissim lorem. Non massa, lorem etiam dictumst arcu
        volutpat cras diam. Id diam ut velit viverra malesuada. Aliquam mauris
        enim non volutpat. Natoque morbi ac at diam eu mi nisl quis euismod.
        Proin lacus at etiam purus nulla.
      </p>
      <h5>Start exploring what works best for you</h5>
      <p>
        Justo mi eu pellentesque cursus augue id consequat enim. Faucibus
        volutpat eget libero amet dui sagittis enim ut vel. Erat fringilla amet,
        diam facilisi elit vulputate elementum orci. Condimentum blandit iaculis
        viverra amet. Aliquet lorem cras vulputate.
      </p>

      <figure>
        <div>
          <img
            src="https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe2cc987e2e1a08cb4457_blog-post-writelogy-x-webflow-template.jpeg"
            alt=""
          />
        </div>
      </figure>
      <figcaption>Lorem ipsum dolor sit amet consectur</figcaption>
      <h6>What other tips do you follow to avoid getting distracted?</h6>
      <p>
        Justo mi eu pellentesque cursus augue id consequat enim. Faucibus
        volutpat eget libero amet dui sagittis enim ut vel. Erat fringilla amet,
        diam facilisi elit vulputate elementum orci. Condimentum blandit iaculis
        viverra amet. Aliquet lorem cras vulputate.
      </p>
      <div className="under-line"></div>
      <div className="horizontal">
        <span>Follow us on social media:</span>
        <ul>
          <li>
            <FontAwesomeIcon icon={faFacebookF} style={{ color: "#000000" }} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#000000" }} />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#000000", fontWeight: "1000" }}
            />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#000000" }} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RichText;

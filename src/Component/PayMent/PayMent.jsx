import React from "react";
import "./PayMent.css";
function PayMent() {
  return (
    <div className="payments wrapper-pay container">
      <div className="form-pay">
        <div className="text-center">
          <div className="content-aut">
            <div className="pay">One-time payment</div>
            <h1>$ 9.99 USD</h1>
            <h2>Get access to our premium articles & content</h2>
          </div>
          <p>
            Sit porttitor potenti nisl proin penatibus velit etiam ac com
            faucibus nunc eu quis integer quis egesta.
          </p>
          <button>Subscribe today!</button>
        </div>
      </div>
    </div>
  );
}

export default PayMent;

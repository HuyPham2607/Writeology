import React from "react";
import "./OnlyPre.css";
function OnlyPre() {
  return (
    <div className="only-pre wrapper-pre container">
      <div className="form-only">
        <div className="text-center">
          <div className="content-aut">
            <span>
              <img
                src="
                https://assets.website-files.com/62abc23e594f83b60b6b133d/62ae218bc5d9c1b6317012c3_access-denied-writelogy-brix-templates.svg"
                alt=""
              />
            </span>
            <h1>This content is for premium accounts only</h1>
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

export default OnlyPre;

import React from "react";
import "./startpage.css";

function StartPage(props) {
  return (
    <div>
      <button className="playBtn" onClick={props.start}>
        START
      </button>
    </div>
  );
}

export default StartPage;

import React from "react";
import "../assets/style.css";
function Description(props) {
  console.log("props", props);
  return (
    <div>
      <br />
      <h2 style={{ textAlign: "center" }}>Quiz Data</h2>
      <br />
      <div>
        <div>
          <img
            style={{ marginLeft: "auto", marginRight: "auto", display: "flex" }}
            src={props.description.image}
            width="30%"
            height="30%"
          />
        </div>
      </div>
    </div>
  );
}

export default Description;

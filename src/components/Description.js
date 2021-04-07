import React from "react";
import "../assets/style.css";
function Description(props) {
  console.log(props.description.state);
  console.log(props.description.capital);
  console.log(props.description.language);

  return (
    <div>
      <br />
      <h2 style={{ textAlign: "center" }}>Quiz Data</h2>
      <br />
      <div>
        <div className="quizDataCard">
          <span className="quizData">State</span>

          <span className="quizData">{props.description.state}</span>
        </div>
        <div className="quizDataCard">
          <span className="quizData">Capital</span>
          <span className="quizData">{props.description.capital}</span>
        </div>
        <div className="quizDataCard">
          <span className="quizData">Language</span>
          <span className="quizData">{props.description.language}</span>
        </div>
      </div>
    </div>
  );
}

export default Description;

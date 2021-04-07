import React, { useState } from "react";
import "../assets/style.css";
const QuestionBox = ({ questions, options, selected, correct }) => {
  const [answers, setAnswers] = useState(options);
  const [result, setResult] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="questionBox">
      <div className="question">{questions}</div>
      {answers.map((answer, index) => (
        <span>
          <button
            key={index}
            className="answerBtn"
            onClick={() => {
              setToggle(true);
              if (answer == correct) {
                setResult(true);
              } else {
                setResult(false);
              }
              setAnswers([answer]);

              selected(answer);
            }}
          >
            {answer}
          </button>
          <span>
            {toggle ? (
              result ? (
                <div>Correct Answer</div>
              ) : (
                <div>
                  Wrong Answer
                  <br />
                  <br />
                  <div>Correct Answer is {correct}</div>
                </div>
              )
            ) : (
              ""
            )}
          </span>
        </span>
      ))}
    </div>
  );
};

export default QuestionBox;

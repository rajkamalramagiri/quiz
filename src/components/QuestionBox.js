import React, { useState } from "react";
import "../assets/style.css";
const QuestionBox = ({ questions, options, selected, correct }) => {
  const [answers, setAnswers] = useState(options);

  return (
    <div className="questionBox">
      <div className="question">{questions}</div>
      {answers.map((answer, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswers([answer]);

            selected(answer);
          }}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;

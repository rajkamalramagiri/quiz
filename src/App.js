import React, { Component } from "react";
import "./App.css";
import "./assets/style.css";
import QuestionBox from "./components/QuestionBox";
import quizService from "./quizService";

class App extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
  };

  getQuestions = () => {
    quizService().then((questions) =>
      this.setState({ questionBank: questions })
    );
  };

  computeAnswer = (answer, correct) => {
    this.setState({ responses: this.state.responses + 1 });

    if (answer == correct) {
      this.setState({ score: this.state.score + 1 });
      return true;
    } else {
      return false;
    }
  };
  componentDidMount() {
    this.getQuestions();
  }
  render() {
    return (
      <div className="container">
        <div className="title"> Quiz Master</div>
        {this.state.questionBank.length > 0 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                questions={question}
                options={answers}
                key={questionId}
                selected={(answer) => this.computeAnswer(answer, correct)}
                correct={correct}
              />
            )
          )}
        {this.state.responses == 5 ? (
          <div
            className="answerBtn"
            style={{ position: "fixed", top: "20%", right: "50%" }}
          >
            Your Score is {this.state.score}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default App;

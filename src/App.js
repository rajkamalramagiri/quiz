import React, { Component } from "react";
import "./App.css";
import "./assets/style.css";
import QuestionBox from "./components/QuestionBox";
import quizService from "./quizService";
import Result from "./components/Result";

class App extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
    showResult: false,
  };
  handleResult = () => {
    this.setState({ responses: this.state.responses + 1 });
  };
  getQuestions = () => {
    quizService().then((questions) =>
      this.setState({ questionBank: questions })
    );
  };

  playAgain = () => {
    this.getQuestions();
    this.setState({ score: 0, responses: 0 });
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
          this.state.responses < 6 &&
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
        {this.state.responses == 5 && (
          <button
            className="answerBtn"
            style={{ marginLeft: "50%" }}
            onClick={this.handleResult}
          >
            show results
          </button>
        )}

        {this.state.responses == 6 && (
          <Result score={this.state.score} playAgain={this.playAgain} />
        )}
      </div>
    );
  }
}
export default App;

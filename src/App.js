import React, { Component } from "react";
import "./App.css";
import "./assets/style.css";
import QuestionBox from "./components/QuestionBox";
import quizService from "./quizService";
import Result from "./components/Result";
import Description from "./components/Description";

class App extends Component {
  state = {
    questionBank: [],
    showQuestions: false,
    showDescription: true,
    score: 0,
    responses: 0,
    showResult: false,
    description: {},
  };
  handleResult = () => {
    this.setState({ responses: this.state.responses + 1 });
  };
  getQuestions = () => {
    quizService().then((questions) => {
      console.log(questions);
      this.setState({
        questionBank: questions[0].questions,
        description: questions[0].description,
      });
    });
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
        {this.state.showDescription && (
          <Description description={this.state.description} />
        )}

        {this.state.showQuestions &&
          this.state.questionBank.length > 0 &&
          this.state.responses < this.state.questionBank.length + 1 &&
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
        {this.state.responses == this.state.questionBank.length && (
          <button
            className="answerBtn"
            style={{ marginLeft: "50%" }}
            onClick={this.handleResult}
          >
            show results
          </button>
        )}

        {this.state.responses == this.state.questionBank.length + 1 && (
          <Result
            score={this.state.score}
            total={this.state.questionBank.length}
            playAgain={this.playAgain}
          />
        )}
      </div>
    );
  }
}
export default App;

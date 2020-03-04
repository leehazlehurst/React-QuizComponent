import React, { Component } from "react";

class QuizEnd extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Thanks for playing!</p>
        <a onClick={this.handleResetClick.bind(this)} href="">
          Reset Quiz
        </a>
      </div>
    );
  }

  handleResetClick() {
    this.props.resetClickHandler();
  }
}

export default QuizEnd;

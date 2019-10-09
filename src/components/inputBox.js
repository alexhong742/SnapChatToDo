import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class InputBox extends Component {
  state = {
    text: this.props.text
  };
  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  handleClick = (e) => {
    this.props.updateList(this.state.text)
    e.preventDefault()
    let data = {summary:this.state.text, created: this.props.date, creat: this.props.months, identifier: `${this.props.months}, ${this.props.date}`}
    axios.post("/", data)
    .then(() => this.props.handlerC());
}

  render() {
    return (
      <div>
        <textarea
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>update</button>
      </div>
    );
  }
}

export default InputBox;

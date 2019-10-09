import React, { Component } from "react";
import ReactDOM from "react-dom";

class InputBox extends Component {
  state = {
    text: this.props.text
  };
  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  handleClick = (e) => {
    this.props.updateList(this.state.text)
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

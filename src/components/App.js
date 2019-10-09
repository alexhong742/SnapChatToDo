import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputBox from "./inputBox.js";
import ListOfActivities from "./listOfActivities";


class App extends Component {
  state = {
    listOfActivies: ["run", "swim", "fly"]
  };

  updateList = e => {
    this.setState({ listOfActivies: this.state.listOfActivies.push(e) });
  };

  render() {
    return (
      <div className="App">
        <h1>To Do List:</h1>
        <ListOfActivities listOfActivities={this.state.listOfActivies} />
        <InputBox updateList={this.updateList} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App
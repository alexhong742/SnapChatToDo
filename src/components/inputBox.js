import React, { Component } from "react";
import ReactDOM from "react-dom";

class ListOfActivities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.listOfActivities
    };
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    let container = this.state.list.map(element => {
      return <div>{element}</div>;
    });
    // for (let i = 0; i < this.state.list.length; i++) {
    //   let item = <div>{this.state.list[i]}</div>;
    //   container.push(item);
    // }
    console.log("this.state.list[1]: ", this.state.list);
    console.log("props: ", this.props);
    return container;
  }
}

// const style = {
//   container: {
//     border: 1px solid black;
//   }
// }

export default ListOfActivities;

import React, { Component } from "react";

class ListOfActivities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.listOfActivities
    };
  }

  handleChange = e => {
    
  };

  render() {
    console.log("this.state.list[1]: ", this.state.list);

    let container = this.state.list.map((element, index) => {
        console.log("element: ", element)
        console.log("index: ", index)
      return <div key={index}>{element}</div>;
    });
    return (
        <div>{container}</div>
    )
  }
}

// const style = {
//   container: {
//     border: 1px solid black;
//   }
// }

export default ListOfActivities;
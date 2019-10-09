import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputBox from "./inputBox.js";
import ListOfActivities from "./listOfActivities";


class App extends Component {
  state = {
    listOfActivies: ["run", "swim", "fly"],
    text: "",
    edittor: true
  };

  updateList = listItem => {
    console.log("listItem: ", listItem )

    this.setState({ listOfActivies: this.state.listOfActivies.push(listItem) });
    console.log("listOfActivies: ", this.state.listOfActivies )
  };

  handler = (e) => {
    this.setState({text:e.target.value})
  };

  toggler = (e) => {
    this.setState({edittor:!this.state.edittor})
  };

  render() {
    document.body.style.backgroundColor = '#014258';
    let arr = [];
    for(let i = 0; i < this.state.listOfActivies.length; i++){
        let summ = <ListOfActivities key={`Sum${i}`} number={i} sum={this.state.listOfActivies} handler={this.handler} id={`id${i}`}
         refresh={this.refresh}/>
        arr.push(summ)
    }
    if(!this.state.edittor){
        return(
            <div style={{backgroundColor:'#014258', color:'#FFF000', margin:'auto',}}>
                <h1 style={{textAlign: 'center', alignSelf: 'stretch'}}>
                TO DO LIST <br/> 
                <input type='submit' value='Back to List' float='right' onClick={this.toggler}/> <br/>
                {dates}</h1>
            <div style={{alignSelf: 'stretch', margin: 'auto', position:'center', display: 'inlineBlock',
                height: 'flex', width: '300px', border: '3px solid black'}}> {arr} </div>
            </div>
            )
    } else{
        return ( 
            <div>
                <InputBox updateList={this.updateList}/>
            </div>
        );
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App
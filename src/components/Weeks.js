import React, { Component } from "react"
import InputBox from "./inputBox.js"

class Weeks extends Component{

    render(){
      let week = [];
      let num = 7*(this.props.weekNumber-1);
      for(let i = 1; i < 8; i++){
        let day = <InputBox key={`Days${i}`} days={this.props.days[i-1]} date={i+num} months={this.props.months} textHandler={this.props.textHandler} text={this.props.text}
          dayID={`day${i}`} edittor={this.props.edittor} listOfActivities={this.props.listOfActivities} handlerC={this.props.handlerC}/>
        week.push(day);
      }
      return(
        <tr className="week">
          {week}
        </tr>
      );
    }

}

export default Weeks;
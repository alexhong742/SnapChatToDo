import React, { Component } from 'react'
import Weeks from "./Weeks.js"
import Head from "./Header.js"

class Months extends Component{

    render(){  
      let month = [];
      let header = ['Sunday','Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      for(let i = 1; i < 5; i++){
        let weeks = <Weeks key={`Week${i}`} days={this.props.days} weekNumber={i} rowID={i} textHandler={this.props.textHandler} text={this.props.text} 
          edittor={this.props.edittor} summaries={this.props.summaries} handlerC={this.props.handlerC} months={this.props.months}/>
        month.push(weeks);
        }
      return(
        <div className="month">
          <table id="simple-board" style={{margin: "auto"}}>
            <thead style={{fontWeight: 'bold', fontSize: '22px'}}>{this.props.months}</thead>
            <tbody key={`Months${this.props.id}`}>
                <Head header={header} key={`Months${this.props.id}`} style={{height: '75%', width: '75%', border: '1px solid grey'}}/>
              {month}
            </tbody>
          </table>
        </div>
      );
    }
}

export default Months;
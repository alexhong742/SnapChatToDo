import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import App from './App.js'
class ListOfActivities extends Component{
    state = {text: ""}
    handleS = (e) => {
      this.setState({text:e.target.value}) 
    }
    render() {
      return(
      <p style={{textAlign: 'center', alignSelf: 'stretch'}}> {this.props.sum[this.props.number].creat}, {this.props.sum[this.props.number].created}: <br/> 
      {this.props.sum[this.props.number].summary.toString()}<br/>
      <form style={{margin:'auto',padding:'auto',fontColor:'#EDF2F4'}}>
      <textarea type='text' name='event' placeholder='edit' value={this.state.text} onChange={this.handleS} 
      style={{color:'#EDF2F4', backgroundColor:'#014258', margin:'auto', height:'40px'}}/>
      <br/>
      </form>
      
       </p>
        );
    }
}
export default ListOfActivities;
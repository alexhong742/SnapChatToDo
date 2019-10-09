import React, {Component} from 'react'
import axios from 'axios'

class ListOfActivities extends Component{
    state = {
      text: ""
    }

    handleS = (e) => {
      this.setState({text:e.target.value});
    }

    delete = () => {
      axios.delete(`/${this.props.listOfActivies[this.props.number].creat}, ${this.props.listOfActivies[this.props.number].created}`)
      .then(() => {
        this.props.refresh();
      });
    };

    patch = (e) => {
      e.preventDefault()
      axios.patch(`/${this.props.listOfActivies[this.props.number].creat}, ${this.props.listOfActivies[this.props.number].created}`,{activities: this.state.text})
      .then(() => this.props.refresh());
      this.setState({text: ""});
    }

    render() {
      return(
      <div style={{textAlign: 'center', alignSelf: 'stretch'}}>
        {this.props.listOfActivies[this.props.number].creat}, {this.props.listOfActivies[this.props.number].created}: 
        <br/> 
        {this.props.listOfActivies[this.props.number].activities.toString()}
        <br/>
        <form style={{margin:'auto',padding:'auto',fontColor:'#EDF2F4'}}>
          <textarea type='text' name='event' placeholder='edit' value={this.state.text} onChange={this.handleS} 
            style={{color:'#EDF2F4', backgroundColor:'#014258', margin:'auto', height:'40px'}}/>
          <br/>
          <input type='submit' value='Edit' onClick={this.patch}/>
        </form>
        <input type='submit' value='Finished' onClick={this.delete}/>
      </div>
        );
    }
}

export default ListOfActivities;
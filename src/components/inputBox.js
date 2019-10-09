import React, {Component} from 'react'
import axios from 'axios'
class InputBox extends Component{
    state = {
        text: this.props.text,
    }
    handlerChange = (e) => {
        this.setState({text:e.target.value}) 
    }
    handler = (e) => {
        e.preventDefault()
        let data = {activities:this.state.text, created: this.props.date, creat: this.props.months, identifier: `${this.props.months}, ${this.props.date}`}
        axios.post("/", data)
        .then(() => this.props.handlerC());
    }

    render() {     
        return (
        <td style={{height: '100px', width: '100px', border: '1px solid gray'}} className='day'>
           <form style={{margin:'auto',padding:'auto',fontColor:'#EDF2F4'}}>
                <textarea type='text' name='event' placeholder={this.props.date} value={this.state.text} onChange={this.handlerChange} 
                style={{color:'#EDF2F4', backgroundColor:'#014258', margin:'auto', height:'100px', resize:'none'}}/><br/>
                <input type='submit' value='Submit' onClick={this.handler}/>
            </form>
        </td>
        );
    }
}
export default InputBox;
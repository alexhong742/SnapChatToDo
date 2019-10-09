import React, {Component} from 'react'
import Months from "./Months"
import axios from "axios"
import ListOfActivities from './listOfActivities'

class App extends Component {
    state = {
        days : ['Sunday','Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        months: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'Semptember', 'October', 'November', 'December'],
        listOfActivies: [],
        text: "",
        edittor: true,
        appWidth: "90%"
    }

    checkMobile() {
		if(screen.width < 750){
			return true;
		}
    };
    
    textHandler = (e) => {
        this.setState({text:e.target.value});
    };

    toggler = (e) => {
        this.setState({edittor:!this.state.edittor});
    };

    refresh = () => {
        axios.get('/schedule').then((res) => {
            this.setState({listOfActivies:res.data});
        });
    };

    handlerClick = (e) => {
        axios.get('/schedule').then((res) => {
            console.log("res:" , res)
            this.setState({listOfActivies:res.data});
            this.setState({edittor:!this.state.edittor});
        });
    };
    
    render()  {
        if (!this.checkMobile()) {
            this.state.appWidth = '75%';
        }
        document.body.style.backgroundColor = '#65F2FB';
        let date = new Date();
        let year = [];
        for(let i = 1; i < 13; i++){
            let months = <Months key={`Month${i}`} days={this.state.days} months={this.state.months[i-1]} date={date} text={this.state.text} textHandler={this.textHandler}
             edittor={this.state.edittor} listOfActivies={this.state.listOfActivies} handlerC={this.handlerClick}/>
            year.push(months)
        }
        if(!this.state.edittor){
            document.body.style.backgroundColor = '#014258';
            let arr = [];
            for(let i = 0; i < this.state.listOfActivies.length; i++){
                let listOfActivies = <ListOfActivities key={`Sum${i}`} number={i} listOfActivies={this.state.listOfActivies} textHandler={this.textHandler} id={`id${i}`}
                 refresh={this.refresh}/>
                arr.push(listOfActivies)
            }
            return(
                <div style={{backgroundColor:'#014258', color:'#FFF000', margin:'auto',}}>
                    <h1 style={{textAlign: 'center', alignSelf: 'stretch'}}>
                        TODO APP 
                        <br/> 
                        <input type='submit' value='Back to Calendar' onClick={this.toggler}/> 
                    </h1>
                   <div style={{alignSelf: 'stretch', margin: 'auto', position:'center', display: 'inlineBlock', height: 'flex', width: '300px', border: '3px solid black'}}>
                        {arr}
                    </div>
                </div>
            )
        } else{
            return ( 
                <div className='yeard' style={{margin:'auto'}}> 
                    <h1 style={{textAlign: 'center', alignSelf: 'stretch'}}>
                        LIST OF ACTIVITIES
                        <br/>
                        <input type='submit' value='View Schedule' onClick={this.handlerClick}/>
                    </h1>
                    <br/>
                    <div style={{border: '6px solid black', width:this.state.appWidth, 'overflowY': 'auto', height: '70%', margin:'auto'}}>
                        {year}
                    </div>
                </div>
            );
        }
    }
};
export default App
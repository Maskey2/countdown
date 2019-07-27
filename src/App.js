import React, {Component} from 'react';
import './App.css';
import './Clock.js'
import Clock from "./Clock";
import {Form, FormControl, Button} from 'react-bootstrap'
import Particles from 'react-particles-js';

const particleOpt= {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      deadline: 'September 6,2019',
      newDeadline: ''
    }
  }

  changeDeadline(){
     this.setState({deadline: this.state.newDeadline})
  }

  render(){
  return (

    <div className="App container" >
        <br/>
      <div className="title"> Countdown to {this.state.deadline} </div>
     <Clock deadline={this.state.deadline}/>
     <div className="center" >
         <Form inline>
             <FormControl className="Deadline-input form-inline"
                          placeholder='new date'
                          onChange={event => this.setState({newDeadline: event.target.value})}
             />
             <Button onClick={()=> this.changeDeadline()}>Submit</Button>
         </Form>
         <Particles
             params={particleOpt}
         />
     </div>
  </div>

  );
}}

export default App;

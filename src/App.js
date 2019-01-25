import React, { Component } from 'react';
import './App.css';
import Date from './Date'
import {Form, FormControl, Button} from 'react-bootstrap'

class App extends Component {
  constructor(){
    super();
    this.state={
      newDate:'',
      birthday: '1996-03-04',
      show:false
    }
  }
  // changeBirthday=()=>{
  //   this.setState({ 
  //     birthday:this.state.newDate,
  //     show:true
  //   })
  // }
  render() {
    return (
      <div className="App">
        {/* <Form inline>
          <h2>Input Your Birthday!!!</h2>
          <FormControl 
            type='date'
            onChange={event => this.setState({ newDate: event.target.value })}
            >
          </FormControl>
          {' '}
          <Button onClick={()=>this.changeBirthday()}>
            submit 
          </Button>
          {
            this.state.show ? 
            <div className="fade age-stats">
            <Date date={this.state.birthday}/>
            </div>
            :
            <div></div>
          }
        </Form> */}
      </div>
    );
  }
}

export default App;

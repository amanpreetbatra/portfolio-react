import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  constructor() {
      super();

      this.state ={
          selectedSection: ""

      };
  }

  render() {
      return (
          <div className="App">
              <p>
                  Class Based State
              </p>
          </div>
      );
  }
}
export default App;

 

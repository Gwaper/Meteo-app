import React, { Component } from 'react';
import Weather from './Components/Weather/Weather.js';
import './App.css';

// api key =Lr3ObC0eujsbAP6umk4PifdWhSrmPHcG 

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
         
          <h2>Meteo-App</h2>
          <Weather/>
        </div>  
      </div>
    );
  }
}

export default App;

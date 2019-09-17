import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import SynthUnit from './SynthUnit.js';
import SoundSelect from './SoundSelect.js';
import instruments from './Instruments.js';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      instrument: 'acoustic_grand_piano',
      instrumentOptions: instruments
    }
  }

  changeSound = (e) => {
    this.setState({
      instrument: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <header className="App-content">
          <h3>Current Instrument: {this.state.instrument}</h3>
          <SoundSelect selectedSound={this.state.selectedSound} instrumentOptions={this.state.instrumentOptions} changeSound={this.changeSound} />
          <SynthUnit instrument={this.state.instrument} />
        </header>
      </div>
    );
  }
}


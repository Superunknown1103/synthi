import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import SynthUnit from './SynthUnit.js';
import SoundSelect from './SoundSelect.js';
import instruments from './Instruments.js';
import Controls from './Controls.js';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      instrument: '',
      instrumentOptions: instruments
    }
  }

  changeSound = (e) => {
    if (e.target.value === "") {
      alert('Select an instrument!')
    } else {
      this.setState({
        instrument: e.target.value
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <header className="App-content">
          <Controls />
          <h3>Current Instrument: {this.state.instrument}</h3>
          <SoundSelect selectedSound={this.state.selectedSound} instrumentOptions={this.state.instrumentOptions} changeSound={this.changeSound} />
          <SynthUnit instrument={this.state.instrument} />
        </header>
      </div>
    );
  }
}


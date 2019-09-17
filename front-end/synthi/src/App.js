import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import SynthUnit from './SynthUnit.js';
import SoundSelect from './SoundSelect.js';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      instrument: 'acoustic_grand_piano'
    }
  }

  changeInstrument = () => {}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <header className="App-content">
          <SoundSelect selectedSound={this.state.selectedSound} />
          <SynthUnit instrument={this.state.instrument} />
        </header>
      </div>
    );
  }
}


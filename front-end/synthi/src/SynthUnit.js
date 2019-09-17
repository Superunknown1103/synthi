import React, { Component } from 'react';
// library to send and receive midi messages
import WebMidi from '../node_modules/webmidi/webmidi.min.js';

var Soundfont = require('soundfont-player')
let ac;

export default class SynthUnit extends Component {

    componentDidMount() {
        WebMidi.enable(function (err) {
            if (err) {
                console.log("WebMidi could not be enabled.", err);
            } else {
                console.log('midi connected')
            }
        });
    }

    createAudioContext = () => {
        ac = new AudioContext();
         // call another function with this binding
         Soundfont.instrument(ac, this.props.instrument, { soundfont: 'MusyngKite' }).then(function (inst) {
            let input = WebMidi.inputs[0];
            input.addListener('noteon', 'all', (event) => {
                let note = event.note.name + event.note.octave.toString();
                inst.play(note)
            })
        });
    }

    render() {
        return (
            <button onClick={this.createAudioContext()}>Start Making Music</button>
        )
    }
}
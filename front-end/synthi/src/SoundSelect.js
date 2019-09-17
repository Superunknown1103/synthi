import React, { Component } from 'react';

export default class SoundSelect extends Component {
    render() {
       let instrumentOptions= this.props.instrumentOptions.map(instr => <option value={instr}>{instr}</option>);
        return (
            <select onChange={(e) => this.props.changeSound(e)}>
                {instrumentOptions}
            </select>
        )
    }
}
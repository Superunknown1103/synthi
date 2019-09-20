import React, { Component } from 'react';
import GainControl from './GainControl';
import VolumeControl from './VolumeControl';

export default class Controls extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className="Controls-container">
                <GainControl />
                <VolumeControl />
            </div>
        )
    }
}
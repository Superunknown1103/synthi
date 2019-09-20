import React, { Component } from 'react';
import CustomKnob from "./CustomKnob.js";

export default class VolumeControl extends Component {

  render() {
    return (
        <div className='knob'>
        <CustomKnob
        min={0}
        max={1000}
        unlockDistance={0}
        preciseMode={false}
        width={200}
        height={200}
      />
        Volume
      </div>
    );
  }
}
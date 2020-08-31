import React, { Component } from 'react';
import Timer from './Timer';
import EasySearch from './EasySearch';
import { Comp } from './test';
import RgbHexSearch from "./Rgb";
import Palette from './palette';
class App extends Component {

  render() {
    return (
      <div>
        <RgbHexSearch />
        <Palette />
      </div>
    )
  }
}
// <Timer width={300} height={300} radius={200} />
export default App;
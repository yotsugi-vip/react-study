import React, { Component } from 'react';
import Timer from './Timer';
import EasySearch from './EasySearch';
import { Comp } from './test';
import Test2 from "./Rgb";

class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello new world</h1>
        <p>Really!?</p>
        <Test2 />
        <Timer width={300} height={300} radius={200} />
        <p>🤔</p>
      </div>
    )
  }
}

export default App;
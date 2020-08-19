import React, { Component } from 'react';
import Timer from './Timer';
import EasySearch from './EasySearch';
import { Comp } from './test';
class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello new world</h1>
        <p>Really!?</p>
        <Comp />
        <Timer width={300} height={300} radius={200} />
        <p>🤔</p>
      </div>
    )
  }
}

export default App;
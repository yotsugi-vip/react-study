import React, { Component, ReactPropTypes } from 'react';
import Timer from './Timer';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello new world</h1>
        <p>Really!?</p>
        <Timer width={300} height={300} radius={200} />
        <p>🤔</p>
      </div>
    )
  }
}

export default App;
import React, { Component } from 'react';
import RgbHexSearch from "./Rgb";
import Palette from './palette';
import { connect } from 'react-redux';
import { PushColors } from "../redux/action";

export class App extends Component {

  render() {
    return (
      <div>
        <RgbHexSearch />
        <Palette />
      </div>
    )
  }

}
const mapStateToProps = (state: any) => {
  return {

  }
};

const mapDispatchToProps = { PushColors };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
// <Timer width={300} height={300} radius={200} />
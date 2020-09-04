import React, { Component } from 'react';
import RgbHexSearch from "./Rgb";
import Palette from './palette';
import { connect, DispatchProp } from 'react-redux';
import { PushColors } from "../redux/action";
import { colors, } from '../redux/reducer';

export class App extends Component<DispatchProp> {
  constructor(props:DispatchProp){
    super(props);
    console.log(this.props);
    this.props.dispatch(PushColors(["a","e","i"]));
  }


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
  return state;
}

//const mapDispatchToProps = { PushColors };
const mapDispatchToProps = { PushColors };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
// <Timer width={300} height={300} radius={200} />
import * as React from 'react';
import { Component } from "react";
import Slider from "@material-ui/core/Slider";
import { TextField } from '@material-ui/core';

type updateValType = (val: number | string) => void;

type redType = "red";
type greenType = "green";
type blueType = "blue";
type RGB = redType | greenType | blueType;

interface IProps_RgbHexSearch { }
interface IState_RgbHexSearch {
    Hex: string,
    R: string,
    G: string,
    B: string
}
export default class RgbHexSearch extends Component<IProps_RgbHexSearch, IState_RgbHexSearch> {
    state: IState_RgbHexSearch;
    constructor(props: IProps_RgbHexSearch) {
        super(props);
        this.state = {
            Hex: "000000",
            B: "0",
            G: "0",
            R: "0"
        }
    }

    updateVal_Hex = (hex: number | string): void => {
        if (typeof hex === 'number') hex = hex.toString(10);
        let r = hex.slice(0, 2);
        let g = hex.slice(2, 4);
        let b = hex.slice(4, 6);

        if (r !== "") r = parseInt(r, 16).toString(10);
        if (g !== "") g = parseInt(g, 16).toString(10);
        if (b !== "") b = parseInt(b, 16).toString(10);


        this.setState({
            Hex: hex,
            R: r,
            G: g,
            B: b
        });
    }

    checkNan(val: string): string {
        if (val === "") {
            return "00";
        }

        return ("00" + parseInt(val, 10).toString(16)).slice(-2);
    }

    updateVal_R = (r: number | string): void => {
        let hex: string;

        if (typeof r === 'number') r = r.toString(10);

        if (r === "") {
            hex = this.state.Hex;
        } else {
            let r_hex = ("00" + parseInt(r, 10).toString(16)).slice(-2);
            let g_hex = this.checkNan(this.state.G);
            let b_hex = this.checkNan(this.state.B);
            hex = `${r_hex}${g_hex}${b_hex}`
        }

        this.setState({
            Hex: hex,
            R: r
        });
    }

    updateVal_G = (g: number | string): void => {
        let hex: string;

        if (typeof g === 'number') g = g.toString(10);

        if (g === "") {
            hex = this.state.Hex;
        } else {
            let r_hex = this.checkNan(this.state.R);
            let g_hex = ("00" + parseInt(g, 10).toString(16)).slice(-2);
            let b_hex = this.checkNan(this.state.B);
            hex = `${r_hex}${g_hex}${b_hex}`
        }
        this.setState({
            Hex: hex,
            G: g
        });
    }

    updateVal_B = (b: number | string): void => {
        let hex: string;

        if (typeof b === 'number') b = b.toString(10);
        if (b === "") {
            hex = this.state.Hex;
        } else {
            let r_hex = this.checkNan(this.state.R);
            let g_hex = this.checkNan(this.state.G);
            let b_hex = ("00" + parseInt(b, 10).toString(16)).slice(-2);
            hex = `${r_hex}${g_hex}${b_hex}`
        }
        this.setState({
            Hex: hex,
            B: b
        })
    }


    render() {
        return (
            <>
                <div style={{
                    display: "flex"
                }}>
                    <div style={{
                        display: "flex",
                        marginBottom: "10px"
                    }}>
                        <HexInput val={this.state.Hex} update={this.updateVal_Hex} />
                        <ColorTips hex={this.state.Hex} />
                    </div>
                    <div style={{
                        marginLeft:"20px"
                    }}>
                        <A val={this.state.R} update={this.updateVal_R} color="red" />
                        <A val={this.state.G} update={this.updateVal_G} color="green" />
                        <A val={this.state.B} update={this.updateVal_B} color="blue" />
                    </div>
                </div>
            </>
        )
    }
}

interface IProps_HexInput { update: updateValType, val: string }
interface IState_HexInput { }
class HexInput extends Component<IProps_HexInput, IState_HexInput> {
    state: IState_HexInput;
    constructor(props: IProps_HexInput) {
        super(props);
        this.state = {};
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.update(event.target.value);
    }

    render() {
        return (
            <>
                <div>
                    <TextField helperText="Hex" value={this.props.val} onChange={this.onChange} />
                </div>
            </>
        )
    }
}

interface IProps_A { update: updateValType, val: string, color: RGB }
interface IState_A { }
class A extends Component<IProps_A, IState_A> {
    state: IState_A;
    constructor(props: IProps_A) {
        super(props);
        this.state = {};
    }

    private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.update(event.target.value);
    }

    private onChangeSlider = (_event: React.ChangeEvent<{}>, value: number | number[]) => {
        this.props.update(value as number);
    }

    private getHexfromRgb = (): string => {
        let ret: string = "000000";
        let hex = this.props.val === ""
            ? "00"
            : ('00' + parseInt(this.props.val, 10).toString(16)).slice(-2);
        if (this.props.color === 'red') {
            ret = `${hex}0000`
        } else if (this.props.color === 'green') {
            ret = `00${hex}00`
        } else if (this.props.color === 'blue') {
            ret = `0000${hex}`
        }
        return ret;
    }

    render() {
        return (
            <>
                <div>
                    <div style={{
                        display: "flex",
                    }}>
                        <TextField helperText={this.props.color} value={this.props.val} onChange={this.onChange} />
                        <ColorTips hex={this.getHexfromRgb()} />
                    </div>
                    <Slider
                        max={255} min={0}
                        value={parseInt(this.props.val, 10)}
                        onChange={this.onChangeSlider}
                        style={{
                            width: "255px"
                        }}
                    />
                </div>
            </>
        )
    }
}

interface IProps_ColorTips { hex: string }
interface IState_ColorTips { }
class ColorTips extends Component<IProps_ColorTips, IState_ColorTips>{
    state: IState_ColorTips;
    constructor(props: IProps_ColorTips) {
        super(props);
        this.state = {};

    }

    private blackOrWhite(colorCode: string): string {
        let red = parseInt(colorCode.substr(1, 2));
        let green = parseInt(colorCode.substr(3, 2));
        let blue = parseInt(colorCode.substr(5, 2));
        let brightness = ((red * 299) + (green * 587) + (blue * 114)) / 1000;
        return brightness < 125 ? "#FFFFFF" : "#000000";
    }

    render() {
        return (
            <>
                <div style={{
                    backgroundColor: "#" + this.props.hex,
                    marginLeft: "10px",
                    width: "80px",
                    textAlign: "center",
                    borderRadius: "5px",
                    maxHeight:"60px",
                }}>
                    <p style={{
                        color: this.blackOrWhite("#" + this.props.hex),
                    }}
                    >{this.props.hex}</p>
                </div>
            </>
        )
    }
}

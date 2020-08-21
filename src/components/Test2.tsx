import React, { Component } from "react";
import Slider from "@material-ui/core/Slider";

type updateValType = (val: number | string) => void;
type RGB = "red" | "green" | "blue";

interface IState_Test2 {
    Hex: string,
    R: string,
    G: string,
    B: string
}
interface IProps_Test2 { }
export default class Test2 extends Component<IProps_Test2, IState_Test2> {
    state: IState_Test2;
    props: IProps_Test2;
    constructor(props: IProps_Test2) {
        super(props);
        this.state = {
            Hex: "0",
            B: "0",
            G: "0",
            R: "0"
        }
    }

    private getHexfromRgb(rgb: RGB, val: number) {
        let hex = ("00" + val.toString(16)).slice(-2);
        let ret = "";
        switch (rgb) {
            case "red":
                ret = `#${hex}0000`;
                break;
            case "green":
                ret = `#00${hex}00`;
                break;
            case "blue":
                ret = `#0000${hex}`;
                break;
            default:
                ret = "#000000";
                break;
        }
        return ret;
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

    updateVal_R = (r: number | string): void => {
        let hex: string;

        if (typeof r === 'number') r = r.toString(10);

        if (r === "") {
            hex = this.state.Hex;
        } else {
            let r_hex = ("00" + parseInt(r, 10).toString(16)).slice(-2);
            let g_hex = ("00" + parseInt(this.state.G, 10).toString(16)).slice(-2);
            let b_hex = ("00" + parseInt(this.state.B, 10).toString(16)).slice(-2);
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
            let g_hex = ("00" + parseInt(g, 10).toString(16)).slice(-2);
            let r_hex = ("00" + parseInt(this.state.R, 10).toString(16)).slice(-2);
            let b_hex = ("00" + parseInt(this.state.B, 10).toString(16)).slice(-2);
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
            let b_hex = ("00" + parseInt(b, 10).toString(16)).slice(-2);
            let g_hex = ("00" + parseInt(this.state.G, 10).toString(16)).slice(-2);
            let r_hex = ("00" + parseInt(this.state.R, 10).toString(16)).slice(-2);
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
                <p>Hex:{this.state.Hex}</p>
                <p>R:{this.state.R}</p>
                <p>G:{this.state.G}</p>
                <p>B:{this.state.B}</p>
                <B val={this.state.Hex} update={this.updateVal_Hex} />
                <A val={this.state.R} update={this.updateVal_R} />
                <A val={this.state.G} update={this.updateVal_G} />
                <A val={this.state.B} update={this.updateVal_B} />
            </>
        )
    }
}

interface IProps_B { update: updateValType, val: string };
interface IState_B { };
class B extends Component<IProps_B, IState_B> {
    props: IProps_B;
    state: IState_B;
    constructor(props: IProps_B) {
        super(props);
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.update(event.target.value);
    }

    render() {
        return (
            <>
                <div>
                    <input type="text" value={this.props.val} onChange={this.onChange} />
                </div>
            </>
        )
    }
}

interface IProps_A { update: updateValType, val: string };
interface IState_A { };
class A extends Component<IProps_A, IState_A> {
    props: IProps_A;
    state: IState_A;
    constructor(props: IProps_A) {
        super(props);
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.update(event.target.value);
    }

    onChangeSlider = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        this.props.update(value as number);
    }

    render() {
        return (
            <>
                <div>
                    <input type="text" value={this.props.val} onChange={this.onChange} />
                    <Slider
                        max={255} min={0}
                        value={parseInt(this.props.val, 10)}
                        onChange={this.onChangeSlider}
                    />
                </div>
            </>
        )
    }
}
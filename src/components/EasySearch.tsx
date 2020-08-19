import * as React from 'react';
import { Component } from 'react';
import { ColorTips } from './ColorTips';
import Slider from '@material-ui/core/Slider';

const regex = new RegExp('^#[0-9abcdefABCDEF]{6}$');

interface IState { inputCode: string, inputValue: string };
export default class EasySearch extends Component {
    state: IState;
    constructor(props: any) {
        super(props);
        this.state = {
            inputCode: "#FFFFFF",
            inputValue: "#FFFFFF"
        }
        this.onchange = this.onchange.bind(this);
    }

    /**
     * 右側の0埋め処理
     * @param colorCode 入力途中のカラーコード
     * @param len 桁数 デフォルト7
     */
    private paddingRight(colorCode: string, len?: number) {
        if (!len) len = 7;
        for (; colorCode.length < len; colorCode += "0");
        return colorCode;
    }

    private onchange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            inputValue: event.target.value,
            inputCode: this.paddingRight(event.target.value)
        });
    }

    render() {
        return <>
            <InputHex />
            <InputRgb />
        </>
    }
}

/**
 * Hex値の入力欄
 */
const reg = new RegExp("^#[0-9abcdefABCDEF]{0,6}?")
const reg_sharp = RegExp("^#");
interface IProps_Hex { };
interface IState_Hex { inputValue: string, colorCode: string };
class InputHex extends Component {
    state: IState_Hex;
    constructor(props: any) {
        super(props);
        this.state = {
            inputValue: "#FFFFFF",
            colorCode: "#FFFFFF"
        }
        this.onchange = this.onchange.bind(this);
    }

    /**
    * 右側の0埋め処理
    * @param colorCode 入力途中のカラーコード
    * @param len 桁数 デフォルト7
    */
    private paddingRight(colorCode: string, len?: number) {
        if (!len) len = 7;
        for (; colorCode.length < len; colorCode += "0");
        return colorCode;
    }

    private onchange(event: React.ChangeEvent<HTMLInputElement>) {
        let val = this.paddingRight(event.target.value);
        console.log(val);
        if(!reg.test(val)) val = this.state.colorCode;

        this.setState({
            inputValue: event.target.value,
            colorCode: regex.test(val) ? val : this.state.colorCode
        });
    }

    render() {
        return <>
            <div style={{ border: "solid 1px #FF0000", backgroundColor: "gray" }}>
                <div style={{ display: "flex" }}>
                    <p style={{ margin: "0" }}>
                        <label>
                            Hex:<input style={{ width: "60px" }} type="text" onChange={this.onchange} value={this.state.inputValue} />
                        </label>
                    </p>
                    <div style={{ marginLeft: "5px" }}>
                        <ColorTips colorCode={this.state.colorCode} />
                    </div>
                </div>
            </div>
        </>
    }
}

/**
 * RGB値の入力欄
 */

type RGB = "red" | "green" | "blue";
interface IState_Rgb { red: number, green: number, blue: number, red_input: string, green_input: string, blue_input: string };
class InputRgb extends Component {
    state: IState_Rgb;
    constructor(props: any) {
        super(props);
        this.state = {
            red: 0,
            green: 0,
            blue: 0,
            red_input: "0",
            green_input: "0",
            blue_input: "0",
        };
        this.onChange = this.onChange.bind(this);
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


    private onChange(event: React.ChangeEvent<HTMLInputElement>): void {
        let val = parseInt(event.target.value, 10);
        let val2 = val;

        if (!val) {
            val = 0;
            val2 = 0;
        }
        if (val > 255) val = 255;
        if (val < 0) val = 0;

        switch (event.target.name) {
            case "Red":
                this.setState({
                    red: val,
                    red_input: event.target.value,
                });
                break;
            case "Green":
                this.setState({
                    green: val,
                    green_input: event.target.value,
                });
                break;
            case "Blue":
                this.setState({
                    blue: val,
                    blue_input: event.target.value,
                });
                break;
        }
    }

    private onRedSlider = (event: React.ChangeEvent, value: number | number[]) => {
        this.setState({
            red: value,
            red_input: value,
        });
    }
    private onGreenSlider = (event: React.ChangeEvent, value: number | number[]) => {
        this.setState({
            green: value,
            green_input: value,
        });
    }

    private onBlueSlider = (event: React.ChangeEvent, value: number | number[]) => {
        this.setState({
            blue: value,
            blue_input: value,
        });
    }

    render() {
        return <>
            <div style={{ border: "solid 1px #FF0000", backgroundColor: "gray" }}>
                <div style={{ display: "flex", border: "solid 1px #FF0000", backgroundColor: "gray" }}>
                    <p style={{ margin: "0" }}>
                        <label >
                            R:<input style={{ width: "40px" }} type="text" onChange={this.onChange} value={this.state.red_input} id="Red" name="Red" />
                        </label>
                    </p>
                    <Slider style={{
                        marginLeft: "10px",
                        width: "100px"
                    }}
                        id="red"
                        min={0} max={255}
                        value={this.state.red}
                        onChange={this.onRedSlider}
                    />
                    <div style={{ marginLeft: "5px" }}>
                        <ColorTips colorCode={this.getHexfromRgb("red", this.state.red)} />
                    </div>
                </div>

                <div style={{ display: "flex" }}>
                    <p style={{ margin: "0" }}>
                        <label >
                            G:<input style={{ width: "40px" }} type="text" onChange={this.onChange} value={this.state.green_input} id="Green" name="Green" />
                        </label>
                    </p>
                    <Slider style={{
                        marginLeft: "10px",
                        width: "100px"
                    }}
                        id="green"
                        min={0} max={255}
                        value={this.state.green}
                        onChange={this.onGreenSlider}
                    />
                    <div style={{ marginLeft: "5px" }}>
                        <ColorTips colorCode={this.getHexfromRgb("green", this.state.green)} />
                    </div>
                </div>

                <div style={{ display: "flex" }}>
                    <p style={{ margin: "0" }}>
                        <label >
                            B:<input style={{ width: "40px" }} type="text" onChange={this.onChange} value={this.state.blue_input} id="Blue" name="Blue" />
                        </label>
                    </p>
                    <Slider style={{
                        marginLeft: "10px",
                        width: "100px"
                    }}
                        id="blue"
                        min={0} max={255}
                        value={this.state.blue}
                        onChange={this.onBlueSlider}
                    />
                    <div style={{ marginLeft: "5px" }}>
                        <ColorTips colorCode={this.getHexfromRgb("blue", this.state.blue)} />
                    </div>
                </div>
            </div>
            <ColorTips colorCode={"#FFFFFF"} />
        </>
    }
}
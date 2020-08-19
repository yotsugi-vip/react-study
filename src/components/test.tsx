import * as React from 'react';
import { Component } from 'react';
import { ColorTips } from './ColorTips';
import Slider from '@material-ui/core/Slider';
import { isNullOrUndefined, isNull } from 'util';

export class Comp extends Component {
    render() {
        return (
            <>
                <Comp2 />
                <Comp2 />
                <Comp2 />
            </>
        )
    }
}


interface Comp2_State { val: number };
class Comp2 extends Component<any, Comp2_State> {
    state: Comp2_State;
    constructor(props: any) {
        super(props);
        this.state = {
            val: 0
        }
    }

    onChange = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        this.setState({
            val: value as number
        })
    }

    propsChange = (val: string) => {
        this.setState({
            val: parseInt(val, 10)
        })
    }

    render() {
        return (
            <>
                <Comp1 val={this.state.val} valChange={this.propsChange} />
                <Slider
                    max={255} min={0}
                    onChange={this.onChange}
                    style={{
                        width: "180px"
                    }}
                />
                <p style={{ margin: 0 }} >{this.state.val}</p>
            </>
        )
    }
}


const reg = new RegExp('[0-9a-fA-F]{1,6}');
interface Comp1_State { val: string, buff: string };
interface Comp1_Props { val: number, valChange: (val: string) => void }
class Comp1 extends Component<Comp1_Props, Comp1_State> {
    state: Comp1_State;
    props: Comp1_Props;
    constructor(props: Comp1_Props) {
        super(props);
        this.state = {
            val: this.props.val.toString(),
            buff: this.props.val.toString()
        };
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (reg.test(event.target.value) || event.target.value === "") {
            this.setState({
                val: event.target.value,
                buff: event.target.value
            }, () => {
                this.props.valChange(event.target.value)
            });
        } else {
            this.setState({
            });
        }
    }

    render() {
        return (
            <>
                <div style={{ display: "flex" }}>
                    <input type="text" value={this.state.val} onChange={this.onChange} />
                    <p style={{ margin: 0 }}>{this.state.buff}</p>
                </div>
            </>
        )
    }
}
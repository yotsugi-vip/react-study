import * as React from 'react';
import { Component } from "react";
import { Paper, TextField, Button, Menu, MenuItem } from '@material-ui/core';




interface IState_Palette { colors: Array<string> }
interface IProps_Palette { }
export default class Palette extends Component<IProps_Palette, IState_Palette> {
    private data = [
        "000000",
        "121212",
        "343434",
        "565656",
        "787878",
        "9A9A9A",
        "BCBCBC",
        "DEDEDE",
        "FFFFFF"
    ];
    private input: string = "000000";
    constructor(props: IProps_Palette) {
        super(props);
        this.state = {
            colors: this.data
        };
    }

    delete = (val: string) => {
        this.setState({
            colors: this.state.colors.filter(target => target !== val)
        });
    }

    register = () => {
        this.state.colors.push(this.input);
        this.setState({
            colors: this.state.colors
        });
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.input = event.target.value;
        console.log(this.input);
    }

    render() {
        return (
            <>
                <div style={{
                    display: "flex"
                }}>
                    <div style={{
                        position: "relative",
                        top: "22px",
                        width: "30px",
                        height: "30px",
                        backgroundColor: "red",
                        borderRadius: "15px"
                    }} />
                    <TextField helperText="ColorCode" onChange={this.onChange} />
                    <Button
                        style={{
                            border: "solid 1px black",
                            height: "30px",
                            marginLeft: "10px",
                            marginTop: "auto",
                            marginBottom: "1px"
                        }}
                        onClick={this.register}
                    >
                        <p>register</p>
                    </Button>
                </div>
                <div>
                    <p>JSONファイルを直接操作する</p>
                </div>
                {this.state.colors.map(val => (
                    <Chip colorCode={val} deleteFunc={this.delete} />
                ))}
            </>
        )
    }
}

interface IState_Chip { event: HTMLElement }
interface IProps_Chip { colorCode: string, deleteFunc: (target: string) => void }
class Chip extends Component<IProps_Chip, IState_Chip> {
    constructor(props: IProps_Chip) {
        super(props);
        this.state = {
            event: null
        };
    }

    onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.setState({
            event: event.currentTarget
        });
    }

    onClose = () => {
        this.setState({
            event: null
        });
    }

    onDelete = () => {
        this.props.deleteFunc(this.props.colorCode);
        this.onClose();
    }

    render() {
        return (
            <>
                <Paper
                    style={{
                        backgroundColor: "#" + this.props.colorCode,
                        width: "60px",
                        height: "30px",
                        border: "double 3px black"
                    }}
                >
                    <Button onClick={this.onClick} />
                    <Menu
                        open={Boolean(this.state.event)}
                        onClose={this.onClose}
                        anchorEl={this.state.event}
                    >
                        <MenuItem onClick={this.onClose}>Change</MenuItem>
                        <MenuItem onClick={this.onDelete}>Delete</MenuItem>
                    </Menu>
                </Paper>
            </>
        )
    }
}

// contextMenuActionsVisibility
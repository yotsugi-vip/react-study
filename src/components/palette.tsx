import * as React from 'react';
import { Component } from "react";
import { Paper, TextField, Button, Menu, MenuItem } from '@material-ui/core';




interface IState_Palette { colors: Array<string> }
interface IProps_Palette { }
export default class Palette extends Component<IProps_Palette, IState_Palette> {
    data = ["000000", "FFFFFF", "121212", "343434", "565656", "787878", "9A9A9A"];
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
                    <TextField helperText="ColorCode" />
                    <Button style={{
                        border: "solid 1px black",
                        height: "30px",
                        marginLeft: "10px",
                        marginTop: "auto",
                        marginBottom: "1px"
                    }}>
                        <p>register</p>
                    </Button>
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
import React, { Component } from 'react';


interface IProps_A { }
interface IState_A { }
export default class A extends Component<IProps_A, IState_A>{
    props: IProps_A;
    state: IState_A;
    constructor(props: IProps_A) {
        super(props);
        this.state = {};
    }

    render() {
        return (<></>)
    }
}

interface IProps_B { }
interface IState_B { }
class B extends Component<IProps_B, IState_B>{
    props: IProps_B;
    state: IState_B;
    constructor(props: IProps_B) {
        super(props);
        this.state = {};
    }

    render() {
        return (<></>)
    }
}

import React, { Component } from 'react';
import { Stage, Layer, Circle, Line, Text } from 'react-konva'

interface TimerProps {
    radius: number,
    width: number,
    height: number,
};

interface TimerState {
    time: Date,
    event: number,
};

class Timer extends Component<TimerProps, TimerState> {
    state: TimerState;
    constructor(props: TimerProps) {
        super(props);
        this.state = { time: new Date, event: null };
    }

    componentDidMount() {
        let num = window.setInterval(() => this.thick(), 1000);
        this.setState({ event: num });
    }

    componentWillUnmount() {
        window.clearInterval(this.state.event);
    }

    thick() {
        this.setState({ time: new Date });
    }

    calcY(len: number) {
        let rad = (len * 6 - 90) * Math.PI / 180;
        let ret = Math.sin(rad) * this.props.radius;
        return ret;
    }

    calcX(len: number) {
        let rad = (len * 6 - 90) * Math.PI / 180;
        let ret = Math.cos(rad) * this.props.radius;
        return ret;
    }

    render() {
        // render the current time
        return (
            <Stage width={this.props.width * 2} height={this.props.height * 2}>
                <Layer>
                    <Circle
                        x={this.props.width}
                        y={this.props.height}
                        radius={this.props.radius}
                        stroke="black"
                    />
                    <Line
                        x={this.props.width}
                        y={this.props.height}
                        points={[0, 0, this.calcX(this.state.time.getSeconds()), this.calcY(this.state.time.getSeconds())]}
                        stroke="black"
                    />
                    <Text text={this.state.time.toLocaleTimeString()} fontSize={15} />
                </Layer>
            </Stage>
        );
    }
}

export default Timer;
import React, { Component } from 'react'
import Timer from './Timer'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentDidUpdate() {

    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (

            <h1 style={{ textAlign: "center", fontSize: 20, marginRight: 300 }}>Sekarang Jam {this.state.date.toLocaleTimeString()}</h1>
        );
    }
}

export default Clock

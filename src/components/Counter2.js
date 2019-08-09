import React, { Component } from "react";


class Counter2 extends Component {
    state = { date: null };
    handle = null;

    componentDidMount() {
        this.handle = setInterval(this.onInterval, 1000);
    }

    onInterval = () => {
        this.setState(({
            date: new Date().toISOString().slice(11, 19)
        }));
    };

    componentWillUnmount() {
        clearInterval(this.handle);
    }

    render() {
        const { date } = this.state;
        return (
            <div>
                <h2>Counter2 (클래스형)</h2>
                {date}
            </div>
        );
    }
}


export default Counter2;

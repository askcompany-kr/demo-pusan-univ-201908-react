import React from 'react';


const actions = {
    init: () => ({ value: 0 }),
    increment: step => (prevState) => ({ value: prevState.value + step}),
    decrement: step => (prevState) => ({ value: prevState.value - step})
};

class Counter extends React.Component {
    state = actions.init();  // 상탯값

    increment = () => this.setState(actions.increment(10));
    decrement = () => this.setState(actions.decrement(10));

    render() {
        const { value } = this.state;
        return (
            <div>
                Counter: {value}
                <button onClick={this.increment}>증가</button>
                <button onClick={this.decrement}>감소</button>
            </div>
        );
    }
}

export default Counter;
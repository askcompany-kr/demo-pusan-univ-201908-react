import React from 'react';

const actions = {
    init: () => ({ value: 0 }),
    increment: step => (prevState) => ({ value: prevState.value + step}),
    decrement: step => (prevState) => ({ value: prevState.value - step})
};

const FunctionalCounter = () => {
    const [state, setState] = React.useState(actions.init());

    const increment = () => setState(actions.increment(10));
    const decrement = () => setState(actions.decrement(10));

    const { value } = state;

    return (
        <div>
            Counter: {value}
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
        </div>
    );
};

export default FunctionalCounter;

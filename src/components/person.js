import React, { Component, useState } from 'react';


function Person1({ name, age=10 }) {
    const [state, setState] = useState({
        name1: name,
        age1: age
    });

    const onClick = () => {
        const { age1 } = state;
        setState({
            ...state,  // 클래스형 컴포넌트와 다른 점
            age1: age1 + 1
        });
    };

    const { age1, name1 } = state;

    return (
        <div onClick={onClick}>
            name: {name1},
            age: {age1}
        </div>
    );
}


function Person2({ name, age=10 }) {
    const [name1, setName1] = useState(name);
    const [age1, setAge1] = useState(age);

    const onClick = () => {
        setAge1(age+1);
    };

    return (
        <div onClick={onClick}>
            name: {name1},
            age: {age1}
        </div>
    );
}


class Person3 extends Component {
    state = {
        name: this.props.name,
        age: this.props.age || 10
    };

    onClick = () => {
        const { age } = this.state;
        this.setState({ age: age + 1 });
    };

    render() {
        const { name, age } = this.state;
        return (
            <div onClick={this.onClick}>
                name: {name},
                age: {age}
            </div>
        );
    };
}
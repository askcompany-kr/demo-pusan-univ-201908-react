import React, { Component } from 'react';
import { produce } from "immer";


class TodoList extends Component {
    // state의 초깃값
    state = {
        current: '',
        todoList: [
            'ES6 익히기',
            '리액트 익히기',
        ]
    };

    onKeyDown = (e) => {
        if ( e.keyCode === 13 ) {
            // console.log("Enter Key.");
            // const { current } = this.state;
            // this.state.todoList.push(current);  // 동작 X
            // const newList = todoList.concat(current); // O
            // this.setState({
            //     todoList: [...todoList, current],
            //     current: ''
            // })
            const newState = produce(this.state, draft => {
                draft.todoList.push(draft.current);
                draft.current = '';
            });
            this.setState(newState);
        }
    };

    onChange = (e) => {
        const current = e.target.value;
        this.setState({ current });
    };

    remove = (currentTodo) => {
        const { todoList } = this.state;
        const newList = todoList.filter(todo => todo !== currentTodo);
        this.setState({
            todoList: newList
        })
    };

    render() {
        const { current, todoList } = this.state;
        return (
            <div>
                <h2>TodoList</h2>
                <input type="text" value={current}
                       placeholder="할 일을 입력해주세요."
                       onKeyDown={this.onKeyDown}
                       onChange={this.onChange} />
                <ul>
                    {todoList.map(todo => <li onDoubleClick={() => this.remove(todo)}>{todo}</li>)}
                </ul>
            </div>
        );
    }
}


export default TodoList;

import React from 'react';
import './App.css';
import Counter from "./components/counter";
import FunctionalCounter from "./components/functional_counter";
import TodoList from "./components/todo_list";
import InputLength from "./components/input_length";
import CurrencyList from "./components/currency_list";
import MovieList from "./components/movie_list";
import Counter2 from "./components/Counter2Hook";
import Button from 'antd/es/button';

class App extends React.Component {
    render() {
        // const message = this.props.message;
        const { message } = this.props;
        return (
            <>
                <Counter2 />
                <hr/>
                <Button>antd 테스트 버튼</Button>
                <Button type="primary">antd 테스트 버튼</Button>
                <MovieList />
                <CurrencyList />
                <hr/>
                <InputLength />
                <hr/>
                <TodoList />
                <h1>Hello, {message}</h1>
                <FunctionalCounter />
                <Counter />
            </>
        );
    }
}

// function App() {
//   return (
//     <h1>Hello, React</h1>
//   );
// }

export default App;

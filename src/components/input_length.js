import React, { Component } from 'react';

class InputLength extends Component {
    state = { input: '' };

    onChange = (e) => {
        const input = e.target.value;
        this.setState({ input });
    };

    render() {
        const { input } = this.state;
        const inputLength = input.length;
        return (
            <div>
                <input type="text" onChange={this.onChange} /><br/>
                현재 글자수 : {inputLength}
            </div>
        );
    }
}

export const input_length = () => {
    const inputLength = 0;

    return (
        <div>
            <input type="text" /><br/>
            현재 글자수 : {inputLength}
        </div>
    );
};

export default InputLength;


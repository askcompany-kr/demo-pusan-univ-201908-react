import React from 'react';
import {message} from "antd";


const MessageContext = React.createContext('');
const StateContext = React.createContext({});


const Level1 = ({ message }) => {
    return (
        <>
            <MessageContext.provider value={message}>
                <StateContext.provider value={{}}>
                    <h2>Level1</h2>
                    <Level2 />
                </StateContext.provider>
            </MessageContext.provider>
        </>
    );
};

const Level2 = () =>
    <>
        <h2>Level2</h2>
        <Level3 />
    </>;

const Level3 = () =>
    <>
        <h2>Level3</h2>
        <Level4 />
    </>;


const Level4 = () => {
    const message = React.useContext(MessageContext);
    const state = React.useContext(StateContext);
    return (
        <>
            <h2>Level 4</h2>
            message: {message}
        </>
    );
};

// const Level4 = () => {
//     return (
//         <>
//             <MessageContext.Consumer>
//                 {message =>
//                     <>
//                         <h2>Level4</h2>
//                         message: {message}
//                     </>
//                 }}
//             </MessageContext.Consumer>
//         </>
//     );
// };

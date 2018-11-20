import React from 'react';
import ReactDom from 'react-dom';
const Counter = (props) => {
    return (
        <div>hi.counter</div>
    )
}
ReactDom.render(<Counter />,document.getElementById('counter'))
import React from 'react';
import './Todo.css'
const Todo = (props) => {
    const {title} = props.todo;
    return (
        <div className='todo'>
            <h2>Title: {title}</h2>
        </div>
    );
};

export default Todo;
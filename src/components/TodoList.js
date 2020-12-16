import React from 'react'
import TodoItem from './TodoItem';
import {useSelector} from 'react-redux';

function TodoList() {
    const todos = useSelector(state => state);
    return (
        <div>
            <h1>Todo List</h1>
            {todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo}/>
            })}
        </div>
    )
}

export default TodoList
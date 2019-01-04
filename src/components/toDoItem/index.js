import React from 'react'


const TodoItem = ({todo}) => {
    return (
        <li className='todo-list-item'>
            <input defaultValue={todo.task} type='text' />
        </li>
    )
} 

export default TodoItem
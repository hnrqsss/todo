import React from 'react'

export const NewToDo = () => {
    return(
        <div className='add-todo'>
            <label htmlFor='addTodo'>Adicionar tarefa:</label>
            <input name='addTodo' type='text' className='input-todo' />
        </div>
    )
}
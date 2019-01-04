import React from 'react'

export const NewToDo = () => {
    return(
        <form className='form-add-todo'>
            <label htmlFor='addTodo'>Adicionar tarefa:</label>
            <input name='addTodo' type='text' className='input-todo' />
            <button>Salvar</button>
        </form>
    )
}
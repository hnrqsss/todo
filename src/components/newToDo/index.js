import React from 'react'
import { connect } from 'react-redux'
import { addNewTodo, requestTodoSuccess } from '../../actions'
import { Todo } from './../../model/Todo'

const NewToDo = ({todos,addNewTodo,requestTodoSuccess}) => {
    
    const prepapareToSubmit = element => {
        
        element.preventDefault()
        
        const input = element.target.elements.addTodo.value
        
        const id = (new Date().valueOf())


        const todo = new Todo(id, input)

        const newTodos = [...todos, todo ]

        addNewTodo(todo)
        
        requestTodoSuccess(newTodos)

        element.target.reset()

    }

    return(
        <form className='form-add-todo' onSubmit={(element) => prepapareToSubmit(element)}>
            <label htmlFor='addTodo'>Adicionar tarefa:</label>
            <input name='addTodo' type='text' className='input-todo' />
            <button>Salvar</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewTodo: (todo) => dispatch(addNewTodo(todo)),
        requestTodoSuccess: (todos) => dispatch(requestTodoSuccess(todos))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewToDo)

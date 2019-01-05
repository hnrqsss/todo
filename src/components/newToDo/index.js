import React from 'react'
import './index.css'
import { connect } from 'react-redux'
import { addNewTodo, requestTodoSuccess } from '../../actions'
import { Todo } from './../../model/Todo'

const NewToDo = ({todos,addNewTodo,requestTodoSuccess}) => {
    
    const prepapareToSubmit = element => {
        
        if(element.keyCode === 13) {

            element.preventDefault()
            
            const form = element.target.closest('form')

            const input = element.target.value
        
            const id = (new Date().valueOf())

            const todo = new Todo(id, input)

            todos = [...todos, todo ]

            addNewTodo(todo)
            
            requestTodoSuccess(todos)

            form.reset()

        }
        
    }

    return(
        <form className='form-add-todo' >
            <input 
                name='addTodo' 
                type='text' 
                className='input-todo' 
                onKeyDown={(element) => prepapareToSubmit(element)} 
                placeholder='O que precisa fazer?'
                />
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

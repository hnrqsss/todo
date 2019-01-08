import React from 'react'
import './index.css'
import { connect } from 'react-redux'
import { Creators } from './../../store/actions'
import { Todo } from './../../model/Todo'

const NewToDo = ({ addNewTodo }) => {
    
    const prepapareToSubmit = element => {
        
        if(element.keyCode === 13) {

            element.preventDefault()
            
            const form = element.target.closest('form')

            const input = element.target.value
        
            const id = (new Date().valueOf())

            const todo = new Todo(id, input)

            addNewTodo(todo)
        
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
        addNewTodo: (todo) => dispatch(Creators.addNewTodo(todo)),
        requestTodoSuccess: (todos) => dispatch(Creators.requestTodoSuccess(todos))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewToDo)

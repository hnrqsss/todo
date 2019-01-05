import React from 'react'
import './index.css'
import { connect } from 'react-redux'
import {  changeTodo, deleteTodo, requestTodoSuccess } from './../../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'


const TodoItem = ({ todo, todos, changeTodo, deleteTodo, requestTodoSuccess }) => {
    
    const prepareToSetTodo = (element) => {      
        
        if (element.keyCode === 13) {
            
            element.target.setAttribute('disabled',true)
            
            todo.task = element.target.value
            
            changeTodo(todo)
        }   
    }

    const enableEdit = element => {
        
        const input = element.target.closest('li').firstChild
        input.removeAttribute('disabled')
        input.focus()    
    }

    const setTaskStatus = (element) => {
        
        const input = element.target.closest('li').firstChild
        
        const li = element.target.closest('li')

        input.setAttribute('disabled',true)
        
        todo.isFinished = !todo.isFinished
        
        if(todo.isFinished) 
            li.classList.add('isFinished')  

        if(!todo.isFinished)    
            li.classList.remove('isFinished')

        changeTodo(todo)
    }

    const prepareToDeleteTodo = () => {
        
        deleteTodo(todo)
        
        const newTodos = todos.filter(item => item.id !== todo.id)
        
        requestTodoSuccess(newTodos)
    }
    
    return (
        <li className={`todo-list-item ${todo.isFinished ? 'isFinished' : ''}`} >
            <input 
                defaultValue={todo.task} 
                type='text'
                disabled={true}
                onKeyDown={(element) => prepareToSetTodo(element)}
                className='todo-task'
            />
            <div className='actions'>
                <button  className='edit' onClick={(element) => enableEdit(element)}><FontAwesomeIcon icon={faPencilAlt} /></button> 
                <button  className='finish' onClick={(element) => setTaskStatus(element)}><FontAwesomeIcon icon={faCheck} /></button>
                <button  className='delete' onClick={(element) => prepareToDeleteTodo(element)}><FontAwesomeIcon icon={faTimes} /></button> 
            </div>
            
        </li>
    )
} 

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTodo: (todo) => dispatch(changeTodo(todo)),
        deleteTodo: (todo) => dispatch(deleteTodo(todo)),
        requestTodoSuccess: (todos) => dispatch(requestTodoSuccess(todos))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoItem)
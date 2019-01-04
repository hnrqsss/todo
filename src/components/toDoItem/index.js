import React from 'react'
import { connect } from 'react-redux'
import {  changeTodo, deleteTodo, requestTodoSuccess } from "./../../actions";



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
    }

    const setTaskStatus = (element) => {
        
        const input = element.target.closest('li').firstChild
        
        input.setAttribute('disabled',true)
        
        todo.isFinished = !todo.isFinished
        
        changeTodo(todo)
    }

    const prepareToDeleteTodo = () => {
        
        deleteTodo(todo)
        
        const newTodos = todos.filter(item => item.id !== todo.id)
        
        requestTodoSuccess(newTodos)
    }
    
    return (
        <li className='todo-list-item' >
            <input 
                defaultValue={todo.task} 
                type='text'
                disabled={true}
                onKeyDown={(element) => prepareToSetTodo(element)}
            />
            <button onClick={(element) => enableEdit(element)}>Editar</button> 
            <button onClick={(element) => setTaskStatus(element)}>Finalizar</button>
            <button onClick={(element) => prepareToDeleteTodo(element)}>deletar</button> 
            
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
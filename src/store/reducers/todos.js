import { createReducer } from 'reduxsauce'
import { Types } from './../actions'

const INITIAL_STATE = {
    isFetching: false,
    todos: [],
    error: ''
}

export const requestTodo = (state = INITIAL_STATE) => {
    return {
        ...state,
        isFetching: true,
        todos: [],
        error: ''
    }
}

export const requestTodoSucess = (state = INITIAL_STATE,action) => {
    return {
        ...state,
        isFetching: false,
        todos: action.todos,
        error: ''
    }
}

export const requestTodoError = (state = INITIAL_STATE, action) => {
    return {
        isFetching: false,
        todos: state.todos,
        error: action.error
    }
}

export const addNewTodo = (state = INITIAL_STATE, action ) => {
    return {
        ...state,
        todos: [...state.todos, action.todo]
    }
}

export const changeTodo = (state = INITIAL_STATE, action) => {
    
    const editedTodo = action.todo

    const newTodos = state.todos

    newTodos.map(todo => {
        
        if(todo.id === editedTodo.id) {
            todo.task = editedTodo.task
            todo.isFinished = editedTodo.isFinished
        }

        return todo
    })

    return {
        ...state,
        todos: newTodos
    }
}

export const deleteTodo = (state = INITIAL_STATE, action) => {
    
    const toRemoveTodo = action.todo

    const newTodos = state.todos.filter(todo => todo.id !== toRemoveTodo.id)

    return {
        ...state,
        todos: newTodos
    }
}

export const HANDLERS = {
    [Types.REQUEST_TODO] : requestTodo,
    [Types.REQUEST_TODO_SUCCESS]: requestTodoSucess,
    [Types.REQUEST_TODO_ERROR]: requestTodoError,
    [Types.ADD_NEW_TODO]: addNewTodo,
    [Types.CHANGE_TODO]: changeTodo,
    [Types.DELETE_TODO]: deleteTodo
}

export default createReducer(INITIAL_STATE, HANDLERS)

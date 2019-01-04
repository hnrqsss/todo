export const requestTodo = () => {
    return {
        type: 'INIT_REQUEST_TODOS'
    }
}

export const requestTodoSuccess = (todos) => {
    return {
        type: 'REQUEST_TODOS_SUCCESS',
        todos
    }
}

export const requestTodoError = (error) => {
    return {
        type: 'REQUEST_TODOS_ERROR',
        error
    }
}

export const addNewTodo = (todo) => {
    return {
        type: 'ADD_NEW_TODO',
        todo
    }
}

export const changeTodo = (todo) => {
    return {
        type: 'SET_TODO',
        todo
    }
}

export const deleteTodo = (todo) => {
    return {
        type: 'DELETE_TODO',
        todo
    }
}
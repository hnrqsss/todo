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

export const addNewTodo = (newTodo) => {
    return {
        type: 'ADD_NEW_TODO',
        newTodo
    }
}
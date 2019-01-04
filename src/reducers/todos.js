const INITIAL_STATE = {
    isFetching: false,
    todos: [],
    error: ''
}

const todoReducer = (state = INITIAL_STATE, action) => {

    if(action.type === 'INIT_REQUEST_TODOS') {
        return {
            isFetching: true,
            todos: [],
            error: ''
        }
    }

    if(action.type === 'REQUEST_TODOS_SUCCESS') {
        return {
            isFetching: false,
            todos: action.todos,
            error: ''
        }
    }

    if(action.type === 'REQUEST_TODOS_SUCCESS') {
        return {
            isFetching: false,
            todos: state.todos,
            error: action.error
        }
    }

    return state
}

export default todoReducer
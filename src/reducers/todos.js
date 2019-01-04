const INITIAL_STATE = {
    isFetching: false,
    todos: [],
    error: ''
}

const todoReducer = (state = INITIAL_STATE, action) => {

    console.log(action)

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

    if(action.type === 'REQUEST_TODOS_ERROR') {
        return {
            isFetching: false,
            todos: state.todos,
            error: action.error
        }
    }

    // if(action.type === 'ADD_NEW_TODO') {
    //     return {
    //         isFetching: false,
    //         todos: [...state.todos, action.todo],
    //         error: 'action.error'
    //     }
    // }

    return state
}

export default todoReducer
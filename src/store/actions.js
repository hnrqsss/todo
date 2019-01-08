import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators
} = createActions({
    requestTodo: null,
    requestTodoSuccess: ['todos'],
    requestTodoError: ['error'],
    addNewTodo: ['todo'],
    changeTodo: ['todo'],
    deleteTodo: ['todo']
})

export default Creators
import { api } from './../../utils/api'
import { takeLatest } from 'redux-saga/effects'
import { getTodos, setTodo, removeTodo, addNewTodo } from './todoSagas'

function *index() {
    yield [
        takeLatest('REQUEST_TODO', getTodos, api),
        takeLatest('CHANGE_TODO', setTodo, api),
        takeLatest('DELETE_TODO', removeTodo, api ),
        takeLatest('ADD_NEW_TODO', addNewTodo, api)
    ]
}


export default index
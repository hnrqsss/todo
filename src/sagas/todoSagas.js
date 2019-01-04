import { put } from 'redux-saga/effects'
import { requestTodoSuccess } from '../actions'

export function *getTodos(api) {
    const { data } = yield api.get()
    yield put(requestTodoSuccess(data))
}

export function *setTodo(api,data) {
   const { todo } = data
    
   yield api.put(`${todo.id}`, todo)
}

export function *removeTodo(api, data) {
    const { todo } = data
    
    yield api.delete(`${todo.id}`, todo)
}

export function *addNewTodo(api, data) {
    const { todo } = data

    yield api.post('', todo)

    // yield getTodos(api)
}
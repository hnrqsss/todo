import { put } from 'redux-saga/effects'
import { requestTodoSuccess } from '../actions'

export function *getTodos(api) {
    const { data } = yield api.get()
    yield put(requestTodoSuccess(data))
}
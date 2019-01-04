import { api } from './../utils/api'
import { takeLatest } from 'redux-saga/effects'
import { getTodos } from './todoSagas'

function *index() {
    yield [
        takeLatest('INIT_REQUEST_TODOS', getTodos, api)
    ]
}


export default index
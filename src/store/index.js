import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers/index'

import createSagaMiddleware from 'redux-saga'
import index from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

export default store

sagaMiddleware.run(index)
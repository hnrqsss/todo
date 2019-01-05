import React, { Component } from 'react'
import './index.css'
// redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

// reducer
import todoReducer from './../reducers/todos'

// sagas
import  createSagaMiddleware from 'redux-saga'
import index from '../sagas'

//components
import NewToDo  from './newToDo'
import TodoList from './toDoList'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    todoReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(index)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <NewToDo />
          <TodoList />
        </div>
      </Provider>  
    )
  }
}

export default App

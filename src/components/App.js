import React, { Component } from 'react'
import './index.css'

// redux
import store from './../store'
import { Provider } from 'react-redux'

//components
import NewToDo  from './newToDo'
import TodoList from './toDoList'

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

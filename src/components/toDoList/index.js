import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import { requestTodo } from './../../actions'

// components
import TodoItem from './../toDoItem'

class TodoList extends Component {
    
    componentDidMount() {
        this.props.requestTodo()
    }

    render() {
        const { todos } = this.props

        return(
            <ul className='todo-list'>
                {todos.length > 0 
                    ? todos.map((todo) => <TodoItem todo={todo} key={todo.id} />) 
                    : <li>Nenhuma tarefa cadastrada</li>
                }
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestTodo: () => dispatch(requestTodo())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
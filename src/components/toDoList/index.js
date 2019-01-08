import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import { Creators } from './../../store/actions'

// components
import TodoItem from './../toDoItem'

class TodoList extends Component {
    
    componentDidMount() {
        this.props.requestTodo()
    }

    render() {
        const { todos } = this.props.todos

        return(
            <ul className='todo-list'>
                {todos.length > 0 
                    ? todos.map((todo) => <TodoItem todo={todo} key={todo.id} />) 
                    : <li className='none-task'>Nenhuma tarefa cadastrada</li>
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
        requestTodo: () => dispatch(Creators.requestTodo())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
import React from 'react';
import Todo from './Todo';
import TodoApi from '../api/TodoApi';
import {connect} from 'react-redux';

class TodoList extends React.Component{
    render(){
        var {todos, searchText, showComplTodo} = this.props;
        var filteredTodos = TodoApi.filterTodos(todos, showComplTodo, searchText);
        var renderItems = ()=>{
            if(filteredTodos.length === 0){
                return <div className="empty-message">Todos not found</div>
            }
            return filteredTodos.map((todo)=>{
                return <Todo key={todo.id} {...todo}/>
            });
        };
        return (
            <div className="todo-list">
                {renderItems()}
            </div>
        );
    }
    
}

module.exports = connect((state)=>{
    return state
})(TodoList);
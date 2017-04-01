'use strict';
import React from 'react';
import moment from 'moment';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import SearchTodo from './SearchTodo';
import TodoApi from '../api/TodoApi';

//dev
import uuid from 'node-uuid';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            showComplTodo: false,
            todos: []

        }
    }
    render() {        
        return (
            <div>
                <h1 className="page-title">Todo app</h1>
                <div className="row">
                    <div className="collumns small-11 medium-6 large-5 small-centered">
                        <div className="container">
                            <SearchTodo/>
                            <TodoList/>
                            <AddTodoForm/>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}
export default Main;
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class AddTodoForm extends React.Component{

    onFormSubmit = (e)=>{
        e.preventDefault();
        var todo = this.refs.todotext.value;
        if(typeof todo === 'string' && todo.length > 0){
            this.refs.todotext.value = '';
            this.props.dispatch(actions.addTodo(todo));
        }else {
            this.refs.todotext.focus();
        }
    };
    render(){
        return (
            <div className="container__footer">
                <form className="add-todo-form" onSubmit={this.onFormSubmit}>
                    <input type="text" ref="todotext" placeholder="What do you need to do"/>
                    <button type="submit" className="button">Add todo</button>
                </form>
            </div>
        );
    }
}
export default connect()(AddTodoForm);
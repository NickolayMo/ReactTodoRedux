import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import * as action from '../actions/actions';

class Todo extends React.Component{

    handleClick = ()=>{
        this.props.dispatch(action.toggleTodo(this.props.id));
    };

    render(){
        var {id, text, complete, createdAt, completedAt, dispatch} = this.props;
        var todoClass = complete ? 'todo todo-complete' : 'todo';
        var renderDate = ()=>{
            var message = '';
            var timestamp = '';
            if(completedAt){
                message = 'Completed at ';
                timestamp = completedAt;
            }else{
                message = 'Created at ';
                timestamp = createdAt;
            }
            var date = moment.unix(timestamp).format('MMM do YYYY @h:mm a');
            return message + date;
        };
        return (
            <div className={todoClass} onClick={this.handleClick}>
                <input type="checkbox" checked={complete}/>
                <div>
                    <span>{text}</span>
                    <p className="todo__subtext">{renderDate()}</p>

                </div>

            </div>
        );
    }
}
export default connect()(Todo);

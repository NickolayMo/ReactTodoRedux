'use strict';
import React from 'react';
import {connect} from  'react-redux';
import * as actions from '../actions/actions';

class SearchTodo extends React.Component {
    render() {
        var {searchText, showComplTodo} = this.props;
        return (
            <div className="container__header">
                <input type="text" ref="searchText" value={searchText} onChange={()=>{
                this.props.dispatch(actions.setSearchText(this.refs.searchText.value));
                }}/>
                <label>
                    <input type="checkbox" ref="showComplTodo" value={showComplTodo} onChange={()=>{
                    this.props.dispatch(actions.toggleShowComleted());
                    }}/>
                    <span>Show completed todos</span>
                </label>
            </div>
        );
    }
}
export default connect((state)=>{
    return {
        searchText: state.searchText,
        showComplTodo: state.showComplTodo
    };
})(SearchTodo);

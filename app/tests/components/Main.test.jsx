'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Main from './../../components/Main';
import $ from 'jquery/dist/jquery.min';

describe('Main', ()=>{
    it('should exist', ()=>{
        expect(Main).toExist();
    });
    it('should add new item',()=>{
        var text = 'test';
        var todo = TestUtils.renderIntoDocument(<Main/>);
        todo.setState({todos:[]});
        todo.handleTodoAdded(text);
        expect(todo.state.todos[0].text).toBe(text);
    });

    it('should toggle complete value when handleToggle called', ()=>{
        var data = {
            id: 1,
            text: 'test',
            complete: false
        };
        var todo  = TestUtils.renderIntoDocument(<Main />);
        todo.setState({todos:[data]});
        expect(todo.state.todos[0].complete).toBe(false);
        todo.handleToggle(1);
        expect(todo.state.todos[0].complete).toBe(true);
        
    });
});
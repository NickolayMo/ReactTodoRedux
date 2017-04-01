'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import TodoList from './../../components/TodoList';
import $ from 'jquery/dist/jquery.min';
import Todo from './../../components/Todo'

describe('TodoList', ()=>{
    it('should exist', ()=>{
        expect(TodoList).toExist();
    });
    it('should render one Todo item for each element', ()=>{
        var todos = [
            {
                id:1,
                text:'1'
            },
            {
                id:2,
                text:'2'
            }
        ];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComp = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
        expect(todosComp.length).toBe(todos.length);
    });
});


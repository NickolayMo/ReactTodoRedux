'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import TodoApi from './../../api/TodoApi';
import $ from 'jquery/dist/jquery.min';

describe('TodoApi', ()=>{
    describe('filterTodos', ()=>{
        var todos = [
            {
                id: 1,
                text: 'first Todo',
                complete: true
            },
            {
                id: 2,
                text: 'second Todo',
                complete: false

            }
        ];
        it('should return all items if showComlete is true',()=>{
            var filteredTodos = TodoApi.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(2);
        });
        it('should return 1 items if showComlete is false',()=>{
            var filteredTodos = TodoApi.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });
        it('should return 1 items if searchText is "first" and showComlete is true',()=>{
            var filteredTodos = TodoApi.filterTodos(todos, true, 'first');
            expect(filteredTodos.length).toBe(1);
        });
        it('should return nothing if searchText is "first" and showComlete is false',()=>{
            var filteredTodos = TodoApi.filterTodos(todos, false, 'first');
            expect(filteredTodos.length).toBe(0);
        });
        it('should return sorted array',()=>{
            var filteredTodos = TodoApi.filterTodos(todos, true, '');
            expect(filteredTodos[0].id).toBe(2);
        });
    });

});

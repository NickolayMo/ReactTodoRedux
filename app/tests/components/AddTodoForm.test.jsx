'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import AddTodoForm from './../../components/AddTodoForm';
import $ from 'jquery/dist/jquery.min';

describe('AddTodoForm', ()=>{
    it('should exist', ()=>{
        expect(AddTodoForm).toExist();
    });
    it('should call onTodoAdded prop with valid data', ()=>{
        var spy = expect.createSpy();
        var form = TestUtils.renderIntoDocument(<AddTodoForm onTodoAdded={spy}/>);
        form.refs.todotext.value='test';
        var $el = $(ReactDOM.findDOMNode(form));
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith('test');
    });

    it('should not call onTodoAdded prop with invalid data', ()=>{
        var spy = expect.createSpy();
        var form = TestUtils.renderIntoDocument(<AddTodoForm onTodoAdded={spy}/>);
        form.refs.todotext.value='';
        var $el = $(ReactDOM.findDOMNode(form));
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});

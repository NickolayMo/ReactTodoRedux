'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Todo from './../../components/Todo';
import $ from 'jquery/dist/jquery.min';

describe('Todo', ()=>{
    it('should exist', ()=>{
        expect(Todo).toExist();
    });
    it('should call onToggle on click', ()=>{
        var props = {
            id: 1,
            text: 'test',
            complete: false
        };
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo key={props.id} {...todo} onToggle={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todo));
        TestUtils.Simulate.click($el[0]);
        expect(spy).toHaveBeenCalled();

    });
});

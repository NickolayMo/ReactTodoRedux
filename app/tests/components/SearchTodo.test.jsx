'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import SearchTodo from './../../components/SearchTodo';
import $ from 'jquery/dist/jquery.min';

describe('SearchTodo', ()=> {
    it('should exist', ()=> {
        expect(SearchTodo).toExist();
    });
    it('should call onSearchChange prop with valid data when searchText changed', ()=> {
        var spy = expect.createSpy();
        var search = TestUtils.renderIntoDocument(<SearchTodo onSearchChange={spy}/>);
        search.refs.searchText.value = 'test';
        var $el = $(ReactDOM.findDOMNode(search));
        TestUtils.Simulate.change($el.find('input[type=text]')[0]);

        expect(spy).toHaveBeenCalledWith( false, 'test');
    });

    it('should call onSearchChange prop with valid data when showComplTodo changed', ()=> {
        var spy = expect.createSpy();
        var search = TestUtils.renderIntoDocument(<SearchTodo onSearchChange={spy}/>);
        search.refs.showComplTodo.checked = true;
        var $el = $(ReactDOM.findDOMNode(search));
        TestUtils.Simulate.change($el.find('input[type=checkbox]')[0]);
        expect(spy).toHaveBeenCalledWith( true, '');
    });


});


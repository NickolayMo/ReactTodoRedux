'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from './components/Main';
import {Provider} from 'react-redux';
var store = require('./configureStore/configureStore').configure();
var actions = require('./actions/actions');

$(document).foundation();
require('style!css!sass!appStyles');
store.subscribe(()=> {
    console.log('new state', store.getState());
});

store.dispatch(actions.toggleShowComleted());
store.dispatch(actions.addTodo('Clean the yard'));

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>
    ,
    document.getElementById('root')
);

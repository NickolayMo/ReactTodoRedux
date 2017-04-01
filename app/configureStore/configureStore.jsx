var redux = require('redux');
import {searchTextReducer, todoReducer, toggleShowCompletedReducer} from '../reducers/reducers';

export const configure = ()=>{
    let reducers = redux.combineReducers({
        searchText: searchTextReducer,
        todos: todoReducer,
        showComplTodo: toggleShowCompletedReducer

    });
    return redux.createStore(reducers, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f=>f
    ));

};

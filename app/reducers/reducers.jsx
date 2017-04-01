import uuid from 'node-uuid';
import moment from 'moment';

export const searchTextReducer = (state = '', action)=>{
    switch(action.type){
        case "SET_SEARCH_TEXT":
            return action.text;
        default:
            return state;
    }
};

export const todoReducer = (state = [], action)=>{
    switch(action.type){
        case "ADD_TODO":
            return [
                ...state,
                {
                    text: action.text,
                    id: uuid(),
                    complete: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ];
        case "TOGGLE_TODO":
            return state.map((todo)=> {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        complete: !todo.complete,
                        completedAt: !todo.complete ? moment().unix() : undefined
                    }
                }
                return todo;
            });
        default:
            return state;
    }
};

export const toggleShowCompletedReducer = (state = false, action)=>{
    switch(action.type){
        case "TOGGLE_SHOW_COMPLETED":
            return !state;
        default:
            return state;

    }
};
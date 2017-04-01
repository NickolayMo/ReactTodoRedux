import expect from 'expect';
import * as reducers from  '../../reducers/reducers';
import df from 'deep-freeze-strict';
import moment from 'moment';

describe("Reducers", ()=> {
    describe("SearchTextReducer", ()=> {
        it("should set search text", ()=> {
            var action = {
                type: "SET_SEARCH_TEXT",
                text: "test"
            };
            let res = reducers.searchTextReducer('', action);
            expect(res).toEqual(action.text);
        });
    });
    describe("toggleTodo", ()=> {
        it("should toggleTodo", ()=> {
            var todos = [
                {
                    text: "test",
                    id: 1,
                    complete: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ];
            var action = {
                type: "TOGGLE_TODO",
                id: 1
            };
            let res = reducers.toggleTodoReducer(df(todos), df(action));
            expect(res[0].complete).toEqual(true);
        });
    });
});



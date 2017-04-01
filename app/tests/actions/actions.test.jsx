import expect from 'expect';
import {setSearchText, addTodo, toggleTodo, toggleShowComleted} from  '../../actions/actions'
describe("Actions", ()=>{
    it("should create action setSearchText",()=>{
        var action = {
            type: "SET_SEARCH_TEXT",
            text: "test"
        };
        expect(setSearchText("test")).toEqual(action);

    });
    it("should create action addTodo",()=>{
        var action = {
            type: "ADD_TODO",
            text: "test"
        };
        expect(addTodo("test")).toEqual(action);

    });
    it("should create action toggleTodo",()=>{
        var action = {
            type: "TOGGLE_TODO",
            id: 1
        };
        expect(toggleTodo(1)).toEqual(action);

    });
    it("should create action setSearchText",()=>{
        var action = {
            type: "TOGGLE_SHOW_COMPLETED"            
        };
        expect(toggleShowComleted()).toEqual(action);

    });
});

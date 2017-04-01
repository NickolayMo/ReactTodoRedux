export const setSearchText = text=>({
    type: "SET_SEARCH_TEXT",
    text
});

export const addTodo = text=>({
    type: "ADD_TODO",
    text
});

export const toggleTodo = id=>({
    type: "TOGGLE_TODO",
    id
});

export const toggleShowComleted = () =>({
    type: "TOGGLE_SHOW_COMPLETED"
});
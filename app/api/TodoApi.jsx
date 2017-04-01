export default {
    filterTodos: (todos, showCompleted, searchText)=>{
        var filteredTodos = todos;
        filteredTodos  = filteredTodos.filter((todo)=>{
            return !todo.complete || showCompleted
        });

        filteredTodos  = filteredTodos.filter((todo)=>{
            return todo.text.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
        });

        filteredTodos.sort((a, b)=>{
            if(a.complete && b.complete){
                return 0;
            }else if(!a.complete && b.complete){
                return -1
            }
            return 1;
        });

        return filteredTodos;
    }
}
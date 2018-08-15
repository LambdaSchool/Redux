import {ADD_TODO, TOGGLE_TODO} from '../actions';

export default (todos = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return todos.concat(action.text);
        case TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload){
                    return Object.assign({}, ...todos, {completed: !todo.completed})
                }
            return todo;
            });
        default:
            return todos;
    }
}
export const ADD_TODO = 'TODO_LIST';
export const COMPLETE_TOGGLE = 'TODO_FORM';



export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    };
}


export const completeToggle = (index) => {
    return {
        type: COMPLETE_TOGGLE,
        payload: index
    };
}
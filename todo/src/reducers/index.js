import { HANDLE_INPUT, ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO } from '../actions';

// const initialState = {
//   todos: [],
//     todo: '',
// }

const initialState = {
  todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
  todo: '',
}

export default (state = initialState, action) => {
  switch(action.type){

    case ADD_TODO:
    //adds the new todo from the form to the state todos array.
      let newList = [
        ...state.todos,
          {
          value: action.payload,
          completed: false,
          }
      ]

      localStorage.setItem('todos', JSON.stringify(newList));

      return {
        ...state,
        todos: newList,
        todo: '' };


    case HANDLE_INPUT:
    //update the state's todo field on change in input form
      return {...state, todo: action.payload};


    case TOGGLE_COMPLETE:
    //maps through the current todos list, finds the item with the index passed by the action, toggles the value in the completed property for that item.
      let completedList = state.todos.map((item, index) => (index === action.payload) ? {...item, completed: !item.completed} : item);
      localStorage.setItem('todos', JSON.stringify(completedList));
      return {
        ...state,
        todos: completedList
      }


    case DELETE_TODO:
    //filters the list of todos on state so that only those that do not match the ID that was passed by the action remain
      let deletingList = state.todos.filter((item, index) =>
       index !== action.payload);
       localStorage.setItem('todos', JSON.stringify(deletingList));
      return {...state, todos: deletingList };
    default:
    return state;
  }
}

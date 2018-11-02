import { ADD_TODO } from "../actions/actions";


const initialState = {
    todos:[
        // { todo: "Get Milk", completed: false},
        // { todo: "Pick up dog food", completed: false }
    ]

}


export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {payload: [...state.todos , {todo: action.payload, completed:false}]});
        default:
            return state
    }
}
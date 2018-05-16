import {ADD, REMOVE, TOGGLE} from '../actions'


/** IMPLEMENT LOCAL STORAGE */
let initialState = [];
let localStore;
let myStorage;
if(window.localStorage) {
    myStorage = window.localStorage

} 

/** Set initialState from localStorage */
if (myStorage.length === 0) {
    console.log("myStorage.length === 0", true)
    initialState = [
        {name:'Hola Caracola',done: false},
        {name: 'Qué pasa calabaza?', done: false},
        {name: 'Another task...', done: true}
    ]
  
  
} else {
    console.log("myStorage.length === 0", false);
    console.log(myStorage);

    const length = myStorage.length;
    for( let i = 0; i < length; ++i ) {
        console.log(myStorage.getItem(`item-${i}`));
        console.log(JSON.parse( myStorage.getItem(`item-${i}`) ))
        initialState.push( JSON.parse( myStorage.getItem(`item-${i}` )));

    }
}
// console.log("Starting Storage",myStorage);
// console.log("initialState)",initialState);

function addToLocalStorage (state) {
    for (let i in localStorage) {
        // console.log(i);
        localStorage.removeItem(i);
    }
    // console.log("state",state);
    state.forEach((task, i) => {
        // console.log(task)
        myStorage.setItem(`item-${i}`, JSON.stringify( task ));
        // console.log(JSON.stringify( task ))
    });
}

export const controller = function (state = initialState, action) {
    let newState = state.slice();
    switch (action.type) {
        case ADD:
            newState = state.concat({name: action.payload, done: false});
            addToLocalStorage(newState)
            return newState;
        case REMOVE:
            newState = newState.slice(0, action.payload).concat(newState.slice(action.payload + 1));
            addToLocalStorage(newState)
            return newState;
        case TOGGLE:
            newState[action.payload].done = !newState[action.payload].done;
            addToLocalStorage(newState)
            return newState;
        default:
            return state;
    }
}
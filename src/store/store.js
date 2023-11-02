import {createStore} from 'redux'

//creating reducer function
const reducerFunc = (state = {counter: 10}, action)=>{
    if( action.type === "INC")
    {
        return ({counter: state.counter + 1})
    }
    if(action.type === "DEC"){
        return({counter: state.counter - 1})
    }
    return state;
}
//creating the store variable
const store = createStore(reducerFunc);
export default store;
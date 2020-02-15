import * as actionTypes  from '../actions/action'
import {combineReducers} from 'redux'
import Users from '../../components/Users/Users';

const initialState = {
    todos: 
    [
        {name: 'Joy Brown',email: 'joy12@gmail.com',id: '1'},
        {name: 'Adam Gren',email: 'adam13@gmail.com',id: '2'},
        {name: 'Daniel Black',email: 'daniel11@gmail.com',id: '3'},
    ],
    users: 
    [
        {name: 'John Mull',email: 'john12@gmail.com',id: '7'},
        {name: 'Tom Cruz',email: 'tom11@gmail.com',id: '8'}, 
        {name: 'Mary Turner',email: 'mary13@gmail.com',id: '9'}
    ]
}


const reducer = (state=initialState, action) =>{
    
    console.log("reducer",state);
    switch(action.type){
        case actionTypes.LIST_TODOS:
            return{
                ...state,
                todos:{...state.todos}
            };
        case actionTypes.LIST_USERS:
            return{
                ...state,
                users:{...state.users}
            };
        case actionTypes.ADD_USER:
            state.unshift(action.payload);
            return [...state, action.payload];
        
        case actionTypes.DELETE_USER:
        {
            console.log(state.users)
            state.users.find(user=>{
                console.log(user.name)
            })
            // state= state.slice();
            // state.splice(action.payload,1)
            //return state = state.map(s => Users(s, action))
            // ...state,
            // users:{...state.users}
        };
        case actionTypes.EDIT_USER:
        return{
            ...state,
            users:{...state.users}
        };
        default:
            return state;
    }
    
}
export default reducer
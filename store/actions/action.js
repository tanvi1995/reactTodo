import Users from "../../components/Users/Users";
import * as actionTypes from '../actions/action'


export const LIST_TODOS= "LIST_TODOS";
export const LIST_USERS="LIST_USERS";
export const ADD_USER="ADD_USER";
export const DELETE_USER="DELETE_USER";
export const EDIT_USER="EDIT_USER";
export const DELETE_USER_SUCCESS="DELETE_USER_SUCCESS";

export const listTodos = (data) =>{
    return{
        type:LIST_TODOS,
        payload:data
    }
}

export const listUsers = (data) =>{
    return{
        type:LIST_USERS,
        payload: data
    }
}
export const addUser = (name) =>{
    console.log(name)
    return{
        type: ADD_USER,
        payload:name
    }
}
export const deleteUser = (name) =>{
    console.log(name)
    return{
        type: DELETE_USER,
        payload:name
    }
}
export const editUser = (data) =>{
    return{
        type:EDIT_USER,
        payload:data
    }
}

// export function DeleteUser(user) {
//     return (dispatch, getState) => {
//         dispatch({
//             type: DELETE_USER,
//             user
//         })
        
//         Users.removeUser(user).then(res => {
//             if (res.status == 204) {
//                 dispatch(DeleteUserSuccess(user))
//             }
//         })
//     }
// }
// export function DeleteUserSuccess(user) {
//     return {
//         type: DELETE_USER_SUCCESS,
//         user,
//         _id: user._id
//     }
// }
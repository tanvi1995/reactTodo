export const LIST_TODOS = "LIST_TODOS";
export const LIST_USERS = "LIST_USERS";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";
export const DELETE_TODO = "DELETE_TODO";

export const listTodos = data => {
  return {
    type: LIST_TODOS,
    payload: data
  };
};

export const listUsers = data => {
  return {
    type: LIST_USERS,
    payload: data
  };
};
export const addUser = name => {
  console.log(name);
  return {
    type: ADD_USER,
    payload: name
  };
};
export const deleteUser = name => {
  return {
    type: DELETE_USER,
    payload: name
  };
};
export const editUser = data => {
  return {
    type: EDIT_USER,
    payload: data
  };
};
export const deleteTodo = data => {
  return {
    type: DELETE_TODO,
    payload: data
  };
};

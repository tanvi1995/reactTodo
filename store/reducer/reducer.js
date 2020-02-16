import * as actionTypes from "../actions/action";

const initialState = {
  todos: [
    {
      name: "Joy Brown",
      email: "joy12@gmail.com",
      timestampDue: 1561881986756
    },
    {
      name: "Adam Gren",
      email: "adam13@gmail.com",
      timestampDue: 1233456789016
    },
    {
      name: "Daniel Black",
      email: "daniel11@gmail.com",
      timestampDue: 1234252562627
    }
  ],
  users: [
    { name: "John Mull", email: "john12@gmail.com", id: "7" },
    { name: "Tom Cruz", email: "tom11@gmail.com", id: "8" },
    { name: "Mary Turner", email: "mary13@gmail.com", id: "9" }
  ]
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LIST_TODOS:
      return {
        ...state,
        todos: { ...state.todos }
      };
    case actionTypes.DELETE_TODO:
      var todos = state.todos.filter(value => value.email !== action.payload);
      return {
        ...state,
        todos
      };
    case actionTypes.LIST_USERS:
      return {
        ...state,
        users: { ...state.users }
      };
    case actionTypes.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };

    case actionTypes.DELETE_USER:
      var users = state.users.filter(value => value.email !== action.payload);
      return {
        ...state,
        users
      };
    case actionTypes.EDIT_USER:
      users = state.users.map(value => {
        if (value.email === action.payload.email) {
          return action.payload;
        } else {
          return value;
        }
      });
      return {
        ...state,
        users
      };
    default:
      return state;
  }
};
export default reducer;

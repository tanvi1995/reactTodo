import React from "react";
import Todos from "./components/Todo/Todos";
import Users from "./components/Users/Users";
import Navbars from "./components/Navbars";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "./store/actions/action";

class App extends React.Component {
  render() {
    return (
      <div className="todo-app container">
        <Navbars />
        <br />
        <Switch>
          <Route
            path="/users"
            exact
            render={props => <Users users={this.props.users} />}
          />
          <Route
            path="/"
            render={props => <Todos todos={this.props.todos} />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("app", state.users);
  console.log("app", state.todos);
  return {
    todos: state.todos,
    users: state.users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    listTodo: () => dispatch({ type: actionTypes.LIST_TODOS }),
    listUser: () => dispatch({ type: actionTypes.LIST_USERS }),
    addUser: () => dispatch({ type: actionTypes.ADD_USER }),
    deleteUser: () => dispatch({ type: actionTypes.DELETE_USER }),
    deleteTodo: () => dispatch({ type: actionTypes.DELETE_TODO }),
    editUser: () => dispatch({ type: actionTypes.EDIT_USER })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

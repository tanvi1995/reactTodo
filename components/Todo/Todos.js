import React, { Component } from "react";
import "../Todo/todoList.css";
import { Icon } from "antd";
import dateformat from "dateformat";
import * as action from "../../store/actions/index";
import { connect } from "react-redux";

class Todos extends Component {
  render() {
    console.log("Todos.js", this.props.todos);
    return (
      <div className="todoListMain">
        {this.props.todos
          ? this.props.todos.map((todo, index) => {
              return (
                <span key={index}>
                  <ul className="todo-list">
                    <li>
                      {todo.name} <br />
                      {dateformat(new Date(todo.timestampDue), "dd-mmm-yyyy")}
                      <span
                        className="deleteIcon"
                        onClick={() => this.props.deleteTodo(todo.email)}
                      >
                        {" "}
                        Delete
                        <Icon type="delete" />
                      </span>
                    </li>
                  </ul>
                </span>
              );
            })
          : "No todos"}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: name => dispatch(action.deleteTodo(name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);

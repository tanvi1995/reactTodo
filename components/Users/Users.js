import React, { Component } from "react";
import "../Users/userList.css";
import { Icon } from "antd";
import * as action from "../../store/actions/index";
import { connect } from "react-redux";
import EditModal from "../Modal/EditModal";
import Createuser from "../Createuser/Createuser";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }
  openModalHandler = email => {
    this.setState({
      editEmail: email,
      isOpen: true
    });
  };
  closeModalHandler = () => {
    this.setState({
      isOpen: false
    });
  };
  render() {
    return (
      <div className="userListMain">
        <Createuser onClick={user => console.log("app", user)} />
        <br />
        {this.props.users
          ? this.props.users.map((user, index) => {
              return (
                <span key={index}>
                  <ul>
                    <li>
                      {user.name}
                      <span
                        className="editIcon"
                        onClick={e => this.openModalHandler(user.email)}
                      >
                        Edit
                        <Icon className="icon" type="edit" />
                      </span>
                      {this.state.isOpen &&
                      this.state.editEmail === user.email ? (
                        <EditModal
                          className="modal"
                          user={user}
                          show={this.state.isOpen}
                          close={this.closeModalHandler}
                        />
                      ) : (
                        ""
                      )}
                      <span
                        className="deleteIcon"
                        onClick={() => this.props.deleteUser(user.email)}
                      >
                        Delete
                        <Icon type="delete" />
                      </span>
                    </li>
                  </ul>
                </span>
              );
            })
          : "No Users"}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteUser: name => dispatch(action.deleteUser(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

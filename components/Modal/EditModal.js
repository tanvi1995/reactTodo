import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { editUser } from "../../store/actions/action";
import { connect } from "react-redux";

class EditModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.user !== undefined ? this.props.user.name : "",
      email: this.props.user !== undefined ? this.props.user.email : ""
    };
  }
  // state = {
  //   user: ""
  // };
  handleChange = e => {
    this.setState({ user: e.target.value });
  };
  handleChange = e => {
    this.setState({ user: e.target.value });
  };
  render() {
    return (
      <div>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <input
                type="text"
                ref="edituser"
                defaultValue={this.state.name}
                onChange={e => this.handleChange(e)}
              />
              <input
                disabled
                type="text"
                ref="userEmail"
                defaultValue={this.state.email}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                this.props.editUser({
                  name: this.refs.edituser.value,
                  email: this.refs.userEmail.value,
                  id: ""
                });
                this.props.close();
              }}
            >
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editUser }, dispatch);
}
export default connect(
  () => {},
  mapDispatchToProps
)(EditModal);

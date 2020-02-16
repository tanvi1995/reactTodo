import React, { Component }  from 'react';
import { Modal,Button } from 'react-bootstrap';
import {bindActionCreators} from 'redux'
import {addUser} from '../../store/actions/action'
import {connect} from 'react-redux'



class Openmodal extends Component{
 state={
   user:""
 }
 handleChange= (e)=>{
  this.setState({ user: e.target.value });
}
  render(){ 
    return(
      <div>
        <Modal.Dialog >
          <Modal.Header>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <form >
              <input type="text" placeholder="Add new user" ref="userAdd" onChange={this.handleChange} required></input>
              &nbsp;<input type="text" placeholder="Add new email" ref="userEmail" required></input>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>Close</Button>
            <Button variant="primary" onClick={() => {this.props.addUser({name:this.refs.userAdd.value,email:this.refs.userEmail.value,id:""});this.props.close();}} disabled={!this.refs.userAdd|| !this.refs.userEmail}>Save changes</Button>
            
          </Modal.Footer>
        </Modal.Dialog>
        
    </div>
    )
}

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addUser},dispatch);
}
export default connect(()=>{},mapDispatchToProps)(Openmodal)

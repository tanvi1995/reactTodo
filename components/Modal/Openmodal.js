import React, { Component }  from 'react';
import { Modal,Button } from 'react-bootstrap';
import {bindActionCreators} from 'redux'

import Users from '../Users/Users';
import {connect} from 'react-redux'
import reducer from '../../store/reducer/reducer'

class Openmodal extends Component{
 state={
   user:""
 }
 constructor(props)
    {
      super(props);
      this.onAdd = this.onAdd.bind(this);
      
    }
//  onAdd=(user)=>{
//   console.log(this.state.user);
//  }
 handleChange= (e)=>{
  this.setState({ user: e.target.value });
}

onAdd = event => {
  console.log(this.state.user);
  event.preventDefault();
  const name = this.state.user;
  console.log(name)
  const info = {name: name};
  console.log(info)
const newItem = this.newItem.value
console.log(this.state.user)
  this.setState({
   user: [...this.state.user,newItem]
  });

 };
  render(){
    
    return(
      <div>
        <Modal.Dialog >
          <Modal.Header>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <input type="text" placeholder="add user" ref={(input)=>{this.newItem=input}} onChange={this.handleChange}></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>Close</Button>
            <Button variant="primary" onClick={event => this.onAdd(event)}>Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
        
    </div>
    )
}

}
// function convertStoreToProps_custom(store){
//   console.log(store);
//   return{
//     myusers:store.users
//   }
// }
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({addUser},dispatch);
// }
export default connect(reducer)(Openmodal)
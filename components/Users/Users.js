import React,{Component} from 'react'
import { bindActionCreators } from 'redux';
import '../Users/userList.css'
import { Icon } from 'antd';
import * as action  from '../../store/actions/index'
import { deleteUser } from  '../../store/actions/action'
import {connect} from 'react-redux'
//import ReactDOM from 'react-dom'

// const Users = ({users}) => {
// console.log('users',users)
//   const userList = users.length ? (
//     users.map(user => {
//       return (
//         <div className="todo-col" key={user.name}>
//           <span>{user.name}</span>
//           <span>{user.email}</span>
//         </div>
//       )
//     })
//   ) : (
//     <p>You have no users</p>
//   )
//   return <div className="todo-cl">{userList}</div>
// }
class Users extends Component{
  
  // deleteUser = (user) => {
  //   this.props.actions.DeleteUser(user)
    
  // }
  
  render(){
    console.log("users.js",this.props.users)
  return(
    <div className="userListMain">
      {this.props.users? 
        this.props.users.map(user=>{
            return <span key={user.id}>
              <ul>
                <li>{user.name}
                  {/* <span className="editIcon" onClick="editTodo">Edit<Icon className="icon" type="edit" /></span> */}
                  <span className="deleteIcon" onClick={()=>this.props.onUserDelete(user.name)} >Delete<Icon type="delete" /></span>
                </li>
              </ul>
            </span>
          })
        : "No Users"
      }
    </div>
  )
}
}
const mapStateToProps = state =>{
  return{
    users: state.users
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    onUserDelete: (name) => dispatch(action.deleteUser(name))
  }
}
// function mapStateToProps(state, ownProps) {
//   return {
//       users: state.users
//   }
// }

// // This maps the dispatch to the property of the component

// function mapDispatchToProps(dispatch) {
//   return {
//       actions: bindActionCreators(action, dispatch)
//   }
// }
export default connect(mapStateToProps,mapDispatchToProps)(Users)

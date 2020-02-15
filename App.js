import React from 'react'
import ReactDOM from 'react-dom'
import Todos from './components/Todo/Todos'
import Users from './components/Users/Users'
import Navbars from './components/Navbars'
import {  Switch, Route,Link} from 'react-router-dom'
import Createuser from './components/Createuser/Createuser'
import {connect} from 'react-redux'
import * as actionTypes from './store/actions/action'

class App extends React.Component {
  // state = {
  //   todos: [
  //     {name: 'Joy',email: 'joy12@gmail.com'},
  //     {name: 'Adam',email: 'adam13@gmail.com'},
  //     {name: 'Daniel',email: 'daniel11@gmail.com'},
  //   ],
  //   users: [{name: 'john',email: 'john12@gmail.com'}, {name: 'tom',email: 'tom11@gmail.com'}, {name: 'Mary',email: 'mary13@gmail.com'}],
  // }
  // deleteTodo = id => {
  //   const todos = this.state.todos.filter(todo => {
  //     return todo.id !== id
  //   })
  //   this.setState({
  //     todos,
  //   })
  // }
  // state={
  //   todo:[]
  // }
  // componentDidMount(){
  //   this.setState({todo:props.todos})
  // }
  render() {
    return (
        <div className="todo-app container">
          {/* <h2 className="todoClass">Todo's</h2>
          <Todos todos={this.props.todos} />
          <h2 className="userClass"> Users</h2>
          <Users users={this.props.users} /> */}
          <Navbars />
          <br></br>
          <Createuser onClick={(user)=>console.log('app',user)}/><br></br>
          <Switch>
            <Route path="/users" exact render={(props)=> <Users users={this.props.users} />} /> 
            <Route path="/"  render={(props)=> <Todos todos={this.props.todos}/>}/>
          </Switch>
        </div>
      
    )
  }
}


const mapStateToProps=(state)=>{
  console.log("app", state.users)
  return{
    todos:state.todos,
    users:state.users
  };
}
const mapDispatchToProps=(dispatch)=>{
  return{
    listTodo:()=>dispatch({type:actionTypes.LIST_TODOS}),
    listUser:()=>dispatch({type:actionTypes.LIST_USERS}),
    addUser:()=>dispatch({type:actionTypes.ADD_USER}),
    deleteUser:()=>dispatch({type:actionTypes.DELETE_USER})
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
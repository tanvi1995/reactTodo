import React,{Component} from 'react'
//import ReactDOM from 'react-dom'
import '../Todo/todoList.css'
import { Icon } from 'antd';

class Todos extends Component{

  render(){
    
  // const todoList = todos? (
  //   todos.map(todo => {
  //     return (
  //       <div className="todo-col" key={todo.id}>
  //         <span
  //           onClick={() => {
  //             deleteTodo(todo.id)
  //           }}
  //         >
  //           {todo.name}
  //             {todos.email}
  //         </span>
  //       </div>
  //     )
  //   })
  // ) : (
  //   <p>You have no todos</p>
  // )// 
  // return <div className="todo-cl">{todoList}</div>
  console.log("Todos.js",this.props.todos)
  return(
    <div className="todoListMain">
      {this.props.todos? 
        this.props.todos.map(todo=>{
            return <span key={todo.id}>
              <ul className="todo-list">
              <li>{todo.name}
              <span className="editIcon" >Edit<Icon className="icon" type="edit" /></span>
              <span className="deleteIcon" > Delete<Icon type="delete" /></span>
              </li>
              </ul>
            </span>
          })
        : "No todos"
      }
    </div>
  )
}
}
export default Todos

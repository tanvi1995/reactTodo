import React from 'react'
import "antd/dist/antd.css";
import { Button,} from "antd";
import Openmodal from '../Modal/Openmodal';
import Users from '../Users/Users'



// const { Button } = antd;

class Createuser extends React.Component{
    constructor(){
      super();
      this.state = {
        isOpen : false
      }
    }
    openModalHandler = () =>{
      this.setState({
        isOpen: true
      })
    }
    closeModalHandler = () =>{
      this.setState({
        isOpen: false
      })
    }
    render() {
    return(
        <div>
            {/* {this.state.isOpen? <div onClick={this.closeModalHandler} className="close"></div> : ""} */}
            <Button onClick={this.openModalHandler}>Create User</Button>
            {this.state.isOpen? <Openmodal className="modal"
                show={this.state.isOpen}
                close={this.closeModalHandler}
                
                >
            </Openmodal>: ""}
        </div>
    )
}
}

export default Createuser
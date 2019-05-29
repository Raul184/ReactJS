import React, { Component } from 'react'
import './Todo.css';
export default class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false,
      //on EDIT 
      taskEdit: this.props.tarea
    }
    this.handleClick = this.handleClick.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  // Handle Click FOR REMOVE
  handleClick(){
    this.props.remove(this.props.id);
  }
  // Handle Click FOR EDIT
  toggleForm(){
    this.setState({
      isEditing : !this.state.isEditing
    });
  }
  //On SUBMIT -----
  handleUpdate(e){
    e.preventDefault();
    //grab new editted data and save it up to the parent
    this.props.edit(this.props.id , this.state.taskEdit);
    //set editing to False
    this.toggleForm();
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }
  // LI
  handleToggle(){
    this.props.toggleCompletion(this.props.id);
  }
  //----------------
  render() {
    let result;
    if(this.state.isEditing){
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input 
              type="text" 
              value={this.state.taskEdit} 
              name="taskEdit" 
              onChange={this.handleChange}
            />
            <button className="Todo-Edit">SAVE</button>
          </form>
        </div>
      )
    } else{
      result = (
        <div className="Todo">
          <li  
            className={
              this.props.complete ? "Todo-Task completed" : "Todo-Task"
            } 
            onClick={this.handleToggle}
          >
            {this.props.tarea}
          </li>
          <div className="Todo-buttons">
            <button className="Todo-Edit" onClick={this.toggleForm}>
              <i class="fas fa-pen"/>
            </button>
            <button className="Todo-Remove" onClick={this.handleClick}>
              <i class="fas fa-trash" />
            </button>
          </div>
        </div>
      )
    }
    return result;
  }
}

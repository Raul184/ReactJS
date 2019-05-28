import React, { Component } from 'react'
import './NewTodoForm.css';
import uuid from 'uuid/v4';

export default class NewTodoForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      task: "",
      complete: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
      [e.target.name] : [e.target.value]
    })
  }
  handleSubmit(e){
    e.preventDefault();
    //collect current toDo
    const toDo = {
      ...this.state , id: uuid()
    }
    //take it up to Parent
    this.props.create(toDo);
    //restart State
    this.setState({
      task: "",
      complete: false
    })
  }
  render() {
    return (
      <div className="NewTodoForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="toDo">New Todo</label>
          <input id="toDo" name="task" type="text" value={this.state.task} onChange={this.handleChange}></input>
          <button>ADD TODO</button>
        </form>
      </div>
    )
  }
}

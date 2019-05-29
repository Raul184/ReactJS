import React, { Component } from 'react'
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  //To Do's Add
  addTodo(nueTodo){
    this.setState({
      todos: [...this.state.todos ,nueTodo]
    });
  }

  // To Do's Remove
  remove(id){
    this.setState({
      todos: this.state.todos.filter( todo => todo.id !== id)
    });
  }

  // To Do's Edit
  edit(id , updatedTask){
    console.log('to be edited');
    // Avoiding to mutate state Arr straight forward
    const all = this.state.todos.map( todo => {
       if(todo.id === id){
         return {...todo, task: updatedTask}
       }
       return todo;
    });
    //save it into state
    this.setState({todos: all})
  }

  // Toggle Completion
  toggle(id){
    const all = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, complete : !todo.complete }
      }
      return todo;
    });
    //save it into state
    this.setState({ todos: all })
  }
  render() {
    const toDos = this.state.todos.map( todo => (
      <Todo  
        key={todo.id} 
        id={todo.id} 
        tarea={todo.task} 
        complete={todo.complete} 
        remove={this.remove} 
        edit={this.edit}
        toggleCompletion={this.toggle}
      /> 
    ))
    return (
      <div className="TodoList">
        <h1>
          Todo List<span>Get things done, one item at a time.</span>
        </h1>
        <ul>
          {toDos}
        </ul>
        <NewTodoForm create={this.addTodo}/>
      </div>
    );
  }
}

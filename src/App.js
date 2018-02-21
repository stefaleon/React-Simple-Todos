import React, { Component } from 'react';
import './App.css';

const TodoItem = ({text}) => (
  <li>{text}</li>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
  }
  render() {
    const { newTodo } = this.state;
    const todos = this.state.todos.map((t, i) => (
      <TodoItem key={i} text={t} />
    ));
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form>
          <input
            className="todo-input"
            autoComplete="off"
            type="text"
            name="newTodo"
            placeHolder="What needs to be done?"
            value={newTodo}
          />
          <button
            type="submit"
            className="save-button"
          >
            Save
          </button>
        </form>
        <div className="todo-content">
          <ol>
            {todos}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;

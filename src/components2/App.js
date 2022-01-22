import React, { Component } from 'react';
import Todo from './Todo';
import Form from './Form';
import Conclude from './Conclude';

let currentId = 0;
let concludeId = 0;

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: [
      ],
      concludes:[
      ]
    };
  }

  //描画用処理
  render() {
    return (
      <div>
        <div class="p-3 mb-2 bg-primary text-white">
          <h1 class="text-center">Todoアプリ</h1>
        </div>
        <div>
          <Form onSubmit={this.handleSubmit} />
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <h3 class="text-center"><span class="badge bg-secondary">未完了</span></h3>
              <ul class="list-group">
              {this.state.todos.map(({ id, text, completed }) => (
                <li class="list-group-item" key={id}>
                 <Todo 
                 id={id}
                 text={text} 
                 completed={completed} 
                 onDelete={this.handleClickDelete}
                 onMove={this.handleConclude}
                 />
                </li>
              ))}
              </ul>
            </div>
            <div class="col">
            <h3 class="text-center"><span class="badge bg-success">完了</span></h3>
            <ul class="list-group">
            {this.state.concludes.map(({ id, text, completed }) => (
              <li class="list-group-item bg-secondary">
                <Conclude
                 id={id}
                 text={text} 
                 completed={completed} 
                 onDelete={this.handleClickDelete2}
                />
              </li>
            ))}
            </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleSubmit = text => {
    const newTodo = {
      id: currentId,
      text: text,
      completed: false
    }
    const newTodos = [...this.state.todos, newTodo]
    this.setState({ todos: newTodos })
    currentId++;
  }

  handleClickDelete = id => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  };

  handleClickDelete2 = id => {
    const newConclude = this.state.concludes.filter(conclude => conclude.id !== id);
    this.setState({ concludes: newConclude });
  };

  handleConclude = (text, id) => {
    this.handleClickDelete(id);

    const concludeTodo ={
      id: concludeId,
      text: text,
      completed: true
    }
    const newConcludes = [...this.state.concludes, concludeTodo]
    this.setState({ concludes: newConcludes})
    concludeId++;
  }
}

export default App
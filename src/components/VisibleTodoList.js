import React, { Component } from 'react';
import Todo from './Todo';


export default class VisibleTodoList extends Component{


  onTodoClick() {

  }

  render(){
    return(
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => this.onTodoClick(todo.id)}
          />
        )}
      </ul>
    );
  }
}

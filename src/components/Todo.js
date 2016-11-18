import React, { Component } from 'react';

export default class Todo extends Component{

  toggleTodo(e){
    this.props.actions.toggleTodo(this.props.id);
  }

  render(){
    return(
      <li className={this.props.completed? 'completed':'not-completed'}>
        {this.props.text}
        {this.props.completed ? ' (🎉 completed)' : ''}
        <input type="checkbox" onClick={this.toggleTodo.bind(this)}/>
      </li>
    )

  }

}

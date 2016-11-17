import React, { Component } from 'react';
import addTodo from '../actions';


export default class AddTodo extends Component{


  render(){
    let input;
    return (
      <div>
        <input ref={node => {
          input = node;
        }} />
        <button onClick={() => {
          this.props.actions.addTodo(input.value);
          input.value = '';
        }}>
          Add Todo
        </button>
      </div>
    );
  };

}

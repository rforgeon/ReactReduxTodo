import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../constants/ActionTypes.js';
import React, { Component } from 'react';
import FilterLink from '../containers/App.js';

export default class Footer extends Component{

  // const Link = ({
  //   active,
  //   children,
  //   onClick
  // }) => {
  //   if (active){
  //     return <span>{children}</span>
  //   }
  //   return (
  //     <a href='#'
  //       onClick={e => {
  //         e.preventDefault();
  //         onClick();
  //       }}
  //     >
  //       {children}
  //     </a>
  //   );
  // };


  render(){
    return(
      <p>
      Show:
      {" "}
      <FilterLink
        filter='SHOW_ALL'
      >
        All
      </FilterLink>
      {" "}
      <FilterLink
        filter='SHOW_ACTIVE'
      >
        Active
      </FilterLink>
      {" "}
      <FilterLink
        filter='SHOW_COMPLETED'
      >
        Completed
      </FilterLink>
      </p>
    )
  }

}

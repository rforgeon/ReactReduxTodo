import {ADD_TODO, TOGGLE_TODO} from '../constants/ActionTypes'


const initialState = []

var idIndex = 0;

export default function todos(state = initialState, action){

  switch (action.type){
    case ADD_TODO:
      return [
        ...state,
        {
          id: idIndex++,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(function(element){
        if (element.id == action.id){
            element.completed = !element.completed;
        }
        return element;
      });
    default:
      return state;
  }
};

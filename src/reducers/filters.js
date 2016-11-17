import {SET_VISIBILITY_FILTER, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../constants/ActionTypes'


const initialState = SHOW_ALL

export default function filters(state = initialState, action){
  switch (action.type){
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

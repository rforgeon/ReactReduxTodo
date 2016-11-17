import * as types from '../constants/ActionTypes';

export const addTodo = todo => ({type: types.ADD_TODO, todo});
export const toggleTodo = toggle=> ({type: types.TOGGLE_TODO, toggle});
export const showAll = showAll => ({type: types.SHOW_ALL, showAll});
export const showActive = showActive => ({type: types.SHOW_ACTIVE, showActive});
export const showCompleted = showCompleted => ({type: types.SHOW_COMPLETED, showCompleted});
export const setVisibilityFilter = filters => ({type: types.SET_VISIBILITY_FILTER, filters});

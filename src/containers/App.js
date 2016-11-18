import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import VisibleTodoList from '../components/VisibleTodoList';
import AddTodo from '../components/AddTodo';
import * as AppActions from '../actions';

const TodoApp = ({actions, todos}) => (
    <div>
      <AddTodo actions={actions}/>
      <VisibleTodoList todos={todos} actions={actions} />
    </div>
);

TodoApp.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    todos: state.todos,
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(AppActions, dispatch)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoApp);

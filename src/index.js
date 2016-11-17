import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import rootReducer from './reducers';
import TodoApp from './containers/App';
import './index.css';


const store = createStore(rootReducer);


  ReactDOM.render(
    <Provider store ={store}>
      <TodoApp />
    </Provider>,
    document.getElementById('root')
  );

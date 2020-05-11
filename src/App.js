import React, { Component } from 'react';
import Board from './components/Board';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './redux/reducers/rootReducer';

class App extends Component {
 
render() {

  const persistedState = localStorage.getItem('board') 
  ? JSON.parse(localStorage.getItem('board'))
  : {};

  const store = createStore(
    rootReducer,
    persistedState
);

store.subscribe(()=>{
  localStorage.setItem('board', JSON.stringify(store.getState()));
});

  return (
      <div className = 'App'>
          <Provider store={store}>
            <Board />
          </Provider>
       </div>
    );
  }
}

export default App;


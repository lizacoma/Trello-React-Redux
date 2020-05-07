import React, { Component } from 'react';
import Board from './components/Board';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './redux/reducers/rootReducer';



class App extends Component {
 
render() {
  const store = createStore(
    rootReducer
);

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


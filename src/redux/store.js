import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

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

export default store;
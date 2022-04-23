import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* 
  To config redux: 
  import the provider from react redux and wrap around the main app component

  When using redux toolkit, can configureStore as a prop in the provider componet
*/
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import TrainerReduce from './store/reduces/TrainerReduce';
import PokemonReduce from './store/reduces/PokemonReduce';

//toolkit -> main reduces root
const store = configureStore({
  reducer: {
    trainer: TrainerReduce,
    pokemon: PokemonReduce,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

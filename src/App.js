import Pokemon from './components/Pokemon';
import Trainer from './components/Trainer';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonDB } from './store/reduces/PokemonReduce';
import { getUserDB } from './store/reduces/TrainerReduce';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonDB());
    dispatch(getUserDB());
    console.log('%c will draw app', 'background: red; color: white');
    return () => {
      console.log('app remounted')
    }
  })
  return (
    <div className="App">
      <Trainer />
      <Pokemon />
    </div>
  );
}

export default App;
